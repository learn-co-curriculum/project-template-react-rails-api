class CartsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        carts = Cart.all
        render json: carts, include: :user
    end 

    def show
        cart = Cart.find(params[:id])
        render json: cart, include: [:user, :orders]
    end 

    def create
        cart = Cart.create(user_params)
        render json: cart
    end 

    def update
        cart = Cart.find(params[:id])
        byebug
    end

    private

    def user_params 
        params.permit(:user_id)
    end 

    def render_invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 
end
