class OrderItemsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        order_items = OrderItem.all
        render json: order_items
    end 

    def show
        order_item = OrderItem.find(params[:id])
        render json: order_item
    end 

    def create
        order_item = OrderItem.create!(order_item_params)
        render json: order_item
    end 

    private

    def order_item_params
        params.permit(:order_id, :item_id, :item_type)
    end 

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 

    def render_not_found
        render json: {errors: "OrderItem not Found"}, status: :not_found
    end
end
