class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :username, :email, :is_parent, :household_id, :password)
    end
end
