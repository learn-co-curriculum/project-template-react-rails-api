class UsersController < ApplicationController

    def index
        user = User.all
        render json: user 
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user
    end

    def create
        user = User.create!(params.permit(:name, :username, :password, :password_confirmation))
        render json: user
    end
end
