class DishesController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    def index
        dishes = Dish.all
        render json: dishes
    end
end