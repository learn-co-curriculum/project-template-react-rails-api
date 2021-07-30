class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        users = User.all
        render json: users
    end

    def create
        byebug
        user = User.create(name: user_params[:name])
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:name, :password, :billing_address, :shipping_address, :email, :birthday)
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
