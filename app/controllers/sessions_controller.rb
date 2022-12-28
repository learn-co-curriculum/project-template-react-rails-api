class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create
        username_login = User.find_by(username: params[:username])
        if username_login && username_login.authenticate(params[:password])
            session[:user_id] = username_login.id
            render json: username_login, status: :ok
        else
            render json: { errors: "Invalid username or password"}, status: :unauthorized
        end
    end


    def delete
        session.delete :user_id
        head :no_content
    end
end
