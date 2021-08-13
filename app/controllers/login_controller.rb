class LoginController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.find_by(name:params[:user][:name])
        if user &.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ['incorrect user and/or password']}, status: :unauthorized
        end
    end
end
