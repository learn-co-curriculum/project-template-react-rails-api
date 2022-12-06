class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   def index
    tasks = Task.all
    render json: tasks, status: :ok
   end 

   def show
    task= Task.find(params[:id])
    render json: task
   end


    def create
     task= Task.create!(task_params)
     render json: task, status: :created
    end

    def destroy 
        task= Task.find(params[:id])
        task.destroy
        head :no_content
    end 

    private 
    def task_params
        params.permit(:content, :project_id)
    end 
    def render_not_found_response
        render json: { error: "Task not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
