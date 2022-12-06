class ManagersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :entity_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index 
        managers = Manager.all
        render json: managers, status: :ok
    end

    def show 
        manager = Manager.find(params[:id])
        render json: manager, status: :ok
    end

    def create
        manager = Manager.create!(manager_params)
        render json: project, status: :accepted
    end

    def update
        manager = Manager.find(params[:id])
        manager.update(manager_params)
        render json: manager, status: :accepted
    end

    def destroy
        manager = manager.find(params[:id])
        manager.destroy
        head :no_content
    end

    private

    def manager_params
        parmas.permit(:first_name, :last_name, :position, :department, :email, :password)
    end

    def entity_not_found_response
        render json: { "error": "Manager not found." }, status: :not_found
    end

    def unprocessable_entity_response exception
        render json: { "errors": exception.record.errors.full_messages },status: :unprocessable_entity
    end
end
