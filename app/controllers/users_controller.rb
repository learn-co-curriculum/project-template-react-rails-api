class UsersController < ApplicationController
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { errors: ["Unauthorized action"] }, status: 401
    end
  end

  def create
    new_user = User.create(user_params)
    if new_user.valid?
      session[:user_id] = new_user.id
      render json: new_user, status: 201
    else
      render json: { errors: ["Validation errors"] }, status: 422
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar_url, :email, :address)
  end

end
