class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts, include: :user
    end 
end
