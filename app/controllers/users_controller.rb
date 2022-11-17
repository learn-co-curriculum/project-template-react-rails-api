class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def show
        render json: @current_user
    end

    def update
        user = @current_user
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        User.find_by_id(@current_user).destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :favorite_band, :location, :genre_1, :genre_2, :genre_3)
    end
end
