class ManagersController < ApplicationController
    def index 
        managers = Manager.all
        render json: managers, status: :ok
    end
end
