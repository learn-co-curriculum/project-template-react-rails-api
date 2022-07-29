class SessionsController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:create]

  ############################### /login
  def create
    user = User.find_by(email_address: params[:email_address])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  ############################### /logout
  def destroy
    session.delete :user_id
    head :no_content
  end
end
