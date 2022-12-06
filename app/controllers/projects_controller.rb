class ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :entity_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index 
        projects = Project.all
        render json: projects, status: :ok
    end

    def show 
        project = Project.find(params[:id])
        render json: project, status: :ok
    end

    def create
        project = Project.create!(project_params)
        render json: project, status: :accepted
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        render json: project, status: :accepted
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    private

    def project_params
        params.permit(:project_title, :start_date, :end_date, :goal, :manager_id, :employee_id)
    end

    def entity_not_found_response
        render json: { "error": "Project not found." }, status: :not_found
    end

    def unprocessable_entity_response exception
        render json: { "errors": exception.record.errors.full_messages },status: :unprocessable_entity
    end
end
