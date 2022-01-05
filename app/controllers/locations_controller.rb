class LocationsController < ApplicationController

    def index 
        locations = Location.all 
        render json: locations
    end

    def show 
        location = find_params
        render json: location
    end
    
    def create 
        location = Location.create!(create_params)
        render json: location, status: :created 
    end

    def destroy
        location = find_params
        location.destroy
        head :no_content
    end

    def update 
        location = Location.find_by(id: params[:id])
        location.update(create_params)
        render json: location 
    end

    def increment_likes 
        location = Location.find_by(id: params[:id])
        location.update(likes: bird.likes + 1)
        render json: location
    end

private 

    def create_params 
        params.permit(:city, :name, :address, :likes)
    end


    def find_params
    Location.find(params[:id])
    end

end


