class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []

    def index
        user = User.all
        render json: user
    end

    def show
        user = user.find(params[:id])
        render json: user
    end

    def create
        user = user.create(user_params)
        if user.valid?
        render json: user, status: :created
        else
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.permit(:name)
    end

    def render_not_found_response
        render json: {error: "User Not Found"}, status: :not_found
    end
    
end
