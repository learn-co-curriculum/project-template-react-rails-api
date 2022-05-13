class UsersController < ApplicationController
    before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index 
        @users = User.all
        render json: @users, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        render json: @current_user
    end

    def get_receiver
        receiver = User.find(params[:id])
        render json: receiver, status: :ok
    end

    private

    def user_params
        params.permit(:username, :email, :admin, :image, :name, :age, :emergency, :address, :nightOwl, :early)
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
    
end
