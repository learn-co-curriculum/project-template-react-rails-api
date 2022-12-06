class EmployeesController < ApplicationController
    def index 
        employees = Employee.all
        render json: employees, status: :ok
    end
end
