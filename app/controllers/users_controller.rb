class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

        
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        byebug
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :avatar_id)
    end

end
