class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id 
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: { error: "You are not currently logged in" }, status: :unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:username, :password, :email)
    end


end
