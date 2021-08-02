class DrinksController < ApplicationController
    def index
        drinks = Drink.all
        render json: drinks, include: [:users, :orders]
    end

    def show
        drink = Drink.find(params[:id])
        render json: drink, include: [:users, :orders]
    end 
end
