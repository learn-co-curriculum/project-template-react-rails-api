class OrdersController < ApplicationController
  
  def index  
    render json: Order.all
  end

  def show 
    order = Order.find(params[:id])
    render json: order    
  end

  def create 
    order = Order.create(order_params)
    render json: order, status: :created
  end

  def update  
    order = Order.find(params[:id])
    order.update(order_params)
    render json: order, status: :updated
  end

  def destroy   
    order = Order.find(params[:id])
    order.destroy
    head :no_content, status: :deleted
  end

  private

  def order_params
    params.permit(:user_id, :restaurant_id, :total)
  end
  
end
