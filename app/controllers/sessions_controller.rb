class SessionsController < ApplicationController
    skip_before_action :authorize_user, only: [:login]

    def login
        # byebug
        # create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            session[:login_attempts] = 0
            render json: user, status: :ok
        else

            session[:login_attempts] ||= 0
            session[:login_attempts] += 1
            render json: { error: "Invalid Password or Username" },  status: :unauthorized
        end
    end 

    # def destroy
    #     session.delete :user_id
    #     head :no_content
    # end

    def logout
        session.delete :current_user
    end 
end