class EmployeesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :entity_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index 
        employees = Employee.all
        render json: employees, status: :ok
    end

    def show 
        employee = Employee.find(params[:id])
        render json: employee, status: :ok
    end

    def create
        employee = Employee.create!(employee_params)
        render json: project, status: :accepted
    end

    def update
        employee = Employee.find(params[:id])
        employee.update(employee_params)
        render json: project, status: :accepted
    end

    def destroy
        employee = Employee.find(params[:id])
        employee.destroy
        head :no_content
    end

    private

    def employee_params
        parmas.permit(:first_name, :last_name, :position, :department, :email, :password)
    end

    def entity_not_found_response
        render json: { "error": "Employee not found." }, status: :not_found
    end

    def unprocessable_entity_response exception
        render json: { "errors": exception.record.errors.full_messages },status: :unprocessable_entity
    end
end
