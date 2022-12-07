class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :image_url)
    end
end
