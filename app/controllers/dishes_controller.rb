class DishesController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []

    def index
        dishes = Dish.all
        render json: dishes
    end

    def show
        dishes = Dish.find(params[:id])
        render json: dishes
    end

    def create
        dish = Dish.create(dish_params)
        if dish.valid?
            render json: dish, status: :created
        else
            render json: {errors: dish.errors.full_messages}, status: :unprocessable_entity
    end
end

    private

    def dish_params
        params.permit(:name, :cuisine, :price, :image_url, :restaurant_name, :city_name)
    end
       
end