class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # byebug
            render json: user, status: :ok
        else
            render json: {errors: "Invalid Password or User"}
        end
    end

    def delete
        session.delete :user_id
        head :no_content
    end
end
