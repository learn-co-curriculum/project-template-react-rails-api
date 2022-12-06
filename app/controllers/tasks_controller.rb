class TasksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :entity_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index 
        tasks = Task.all
        render json: tasks, status: :ok
    end

    def show 
        task = Task.find(params[:id])
        render json: employee, status: :ok
    end

    def create
        task = Task.create!(task_params)
        render json: task, status: :accepted
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task, status: :accepted
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        head :no_content
    end
    
    private

    def task_params
        parmas.permit(:description, :project_id)
    end

    def entity_not_found_response
        render json: { "error": "Task not found." }, status: :not_found
    end

    def unprocessable_entity_response exception
        render json: { "errors": exception.record.errors.full_messages },status: :unprocessable_entity
    end
end
