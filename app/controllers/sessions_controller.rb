class SessionsController < ApplicationController
  # skip_before_action :authorize, only: :create

  # POST /login
  # create session when user logs in
  def create
    # users logging in w email
    user = User.find_by(email: params[:email])
    # the & is a "safe navigation operator" - https://mitrev.net/ruby/2015/11/13/the-operator-in-ruby/
    # If user is nil, it will return nil; if not, it will call the .authenticate method on user. It would be similar to writing user && user.authenticate(params[:password])
    if user&.authenticate(params[:password])
    # if user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["invalid email or password"] }, status: :unauthorized
    end
  end

  # /logout
  # delete session when user logs out
  def destroy
    session.delete(:user_id)
    head :no_content
  end
end
