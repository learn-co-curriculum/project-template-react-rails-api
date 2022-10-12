class PropertiesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = find_property
        render json: property, Serializer: :PropertySerializer
    end

    def create
        property = Property.create!(property_params)
        render json: property, Serializer: :PropertySerializer
    end

    def update
        property = find_property
        property.update!(property_params)
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

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Property not found" }, status: :not_found
    end
end
