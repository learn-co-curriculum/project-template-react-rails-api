class PropertiesController < ApplicationController
    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = find_property
        render json: property
    end

    def create
        property = Property.create(property_params)
        render json: property
    end

    def update
        property = find_property
        property.update(property_params)
        render json: property
    end

    def destroy
        property = find_property
        property.destroy
        render json: property
    end

    private
    def property_params
        params.permit(:image_url, :name, :address, :description, :price)
    end

    def find_property
        Property.find(params[:id])
    end
end
