class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create 
        user = User.create!(create_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end


private 

    def create_params 
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :image_url, :bio)
    end


end
