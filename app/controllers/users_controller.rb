class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index

    end

    def show

    end

    def update

    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        def user_params
            params.permit(:username, :password, :password_confirmation)
          end
    end

    private


end
