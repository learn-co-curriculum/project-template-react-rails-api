class PropertiesController < ApplicationController

    def show 
        selected_property = Property.find_by(id: params[:id])
        if selected_property
            render json: selected_property
        else
            render json: { error: "Property not found" }, status: :not_found
        end
    end

    def create
        new_property = Property.create!(property_params)
        render json: new_property, status: :created
    end

    private

    def property_params
        params.permit(:address, :city, :owner_occupied, :owner_id)
    end

end
