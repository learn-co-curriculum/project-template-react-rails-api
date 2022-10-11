class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    private
    def user_params
        params.permit(:username, :email, :password_digest, :seller_id, :property_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "User not found" }, status: :not_found
    end
end
