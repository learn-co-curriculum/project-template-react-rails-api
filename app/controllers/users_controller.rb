class UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create_both
    user = User.create!(username: params[:user], password: params[:password])
    volunteer =
      Volunteer.create!(
        name: params[:name],
        age: params[:age],
        email: params[:email],
        user_id: user.id
      )
    render json: volunteer, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
