class SessionController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid username or password"]
            }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

  def record_not_found
    render json: { error: "User not found" }, status: :not_found
  end


   
end
