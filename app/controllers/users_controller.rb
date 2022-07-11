class UsersController < ApplicationController
    #skip_before_action :authorize, only: :create
    #rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: User.all
    end

    def show
        user = User.find_by_id(params[:id])
        if user
            render json: user.to_json 
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:user_name, :password, :password_digest)
    end


end
