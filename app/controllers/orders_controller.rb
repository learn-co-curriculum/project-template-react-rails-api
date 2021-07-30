class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders, include: [:user, :bean, :drink]
    end 
end
