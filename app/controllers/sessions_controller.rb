class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to "/profile"
    else
      redirect_to "/login?error=Invalid+Credentials"
    end
  end

  def logged_in
    if current_user.valid?
      render json: current_user, status: :ok
      # {
      #   logged_in: true,
      #   status: :ok,
      #   user: current_user
      # }
    else
      render json: { 
        error: "User not logged in",
        logged_in: false,
        status: :unauthorized
      }
    end
  end

  def destroy
    session.delete :user_id
    # redirect_to "/tickets"
  end

end