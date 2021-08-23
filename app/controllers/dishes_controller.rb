class DishesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []

    def index
        dish = Dish.all
        render json: dish
    end

    def show
        dish = Dish.find(params[:id])
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


    def destroy
        dish = Dish.find(params[:id])
        dish.destroy
        render json: {message: "Dish has been deleted"}
    end



    private
    def dish_params
        params.permit(:name, :cuisine, :price, :image_url, :restaurant_name, :city_name)
    end

    def render_not_found_response
        render json: {error: "Dish Not Found"}, status: :not_found
    end
       
end