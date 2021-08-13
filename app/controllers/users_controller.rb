class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    #just to verify data
    def index
        render json: User.all
    end

    #create a user via signing in
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #return signed in user
    def show 
        render json: @current_user
    end

    private

    #parameters a user will need to sign up
    def user_params
        params.require(:user).permit(:name, :password, :fav_genre, :bio)
    end
end
