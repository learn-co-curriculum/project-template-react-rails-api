class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        # byebug
        render json: user, status: :ok
        # if user
        #     render json: user
        # else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        # end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password)
    end
end
