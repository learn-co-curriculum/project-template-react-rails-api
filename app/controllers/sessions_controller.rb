class SessionsController < ApplicationController
    before_action :find_user, only: [:create]
    
    def create 
        session[:user_id] = @user.id 
        render json: @user, status: :created
    end

    def register
        user = User.find_by(username: params[:username])
        if (!user)
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: { error: "This username exists" }
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private 

    def user_params
        params.permit(:username, :password )
    end

    def find_user
        @user = User.find_by(username: params[:username])
    end

end 