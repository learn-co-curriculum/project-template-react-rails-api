class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record
    def create
        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])            
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ['Invalid username or password']}, status: :unauthorized
        end
    end

    def destroy
        user = User.find(session[:user_id])
        session.delete :user_id
        head :no_content
    end

    def render_record_not_found
        render json: {errors: ['Invalid username or password']}, status: :unauthorized
    end
end
