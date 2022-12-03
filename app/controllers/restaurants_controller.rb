class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET all restaurants
    def index 
        render json: Restaurant.all
    end

    #POST new restaurant
    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: 201
    end

    #GET restaurant by id
    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant
    end

    #PATCH restaurant review
    def update
        restaurant = Restaurant.find(params[:id])
        restaurant.update(review: restaurant.review)
        render json: restaurant
    end

    private

    def restaurant_params
        params.permit(:name, :review, :location)
    end

    def render_not_found_response
        render json: {error: "Restaurant not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end 
end
