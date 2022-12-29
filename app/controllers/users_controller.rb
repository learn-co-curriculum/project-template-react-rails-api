class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end

    def create
        render json: User.create!(new_user_params), status: :created
    end

    private

    def new_user_params
        params.permit(:username, :avatar, :email, :password)
    end
end
