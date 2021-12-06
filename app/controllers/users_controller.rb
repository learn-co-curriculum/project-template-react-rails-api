class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        byebug
        render json: user, status: :created
    end
    
    def show
        render json: User.all
    end

    private

    def user_params
        params.permit(:username, :password, :avatar_id)
    end

end
