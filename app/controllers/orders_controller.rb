class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        orders = Order.all
        render json: orders, include: [:order_items, :beans, :drinks]
    end 

    def show
        order = Order.find(params[:id])
        render json: order, include: [:order_items, :beans, :drinks]
    end 

    def create 
        order = Order.create!(order_params)
        render json: order
    end 

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end 

    private

    def order_params
        params.permit(:user_id, :cart_id, :current_order)
    end 

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 

    def render_not_found
        render json: {errors: "Order not Found"}, status: :not_found
    end
end
