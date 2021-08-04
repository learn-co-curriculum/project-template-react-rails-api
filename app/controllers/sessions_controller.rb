class SessionsController < ApplicationController

    def create
        
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:user_role] = user.role_type
            # session[:role_id] = user.role_id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        session.delete :user_role
        # session.delete :role_id
        head :no_content
    end

end