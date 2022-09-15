class SessionsController < ApplicationController
  skip_before_action :authenticate_user, except: :destroy

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

  def destroy
    if session[:user_id]
      session.delete :user_id
      head :no_content
    else
      render json: { errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

end
