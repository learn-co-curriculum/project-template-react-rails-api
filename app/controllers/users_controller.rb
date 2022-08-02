class UsersController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: %i[index create show]

  ############################### /users
  def index
    render json: User.all
  end

  ############################### /me
  def show
    user = User.find_by!(id: session[:user_id])
    render json: user
  end

  ############################### /signup
  def create
    if params[:password_confirmation] == params[:password]
      user_type_id = UserType.find_by(user_type: "player").id
      params_hash = user_params.to_h
      params_hash[:user_type_id] = user_type_id
      user = User.create!(params_hash)
      render json: user
    else
      render json: { errors: ["Confirmation password does not match password"] }
    end
  end

  private

  def user_params
    params.permit(
      :email_address,
      :password,
      :password_confirmation,
      :first_name,
      :last_name
    )
  end
end
