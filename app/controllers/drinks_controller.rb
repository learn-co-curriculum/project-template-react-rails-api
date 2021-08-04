class DrinksController < ApplicationController
    def index
        drinks = Drink.all
        render json: drinks
    end

    def show
        drink = Drink.find(params[:id])
        render json: drink
    end 
end
