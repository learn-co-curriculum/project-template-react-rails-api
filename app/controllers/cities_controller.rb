require 'byebug'

class CitiesController < ApplicationController
    # GET /cities/search
    def search
        puts "searching cities..."
        @cities = City.all
        search_params.each do |key, value|
            @cities = @cities.public_send("filter_by_#{key}", value) if value.present?
        end
        puts @cities
        render json: @cities, status: :ok
    end

    private

    def search_params
        params.permit(:apt_price_per_meter2_inside_city_center, :apt_price_per_meter2_outside_city_center, :monthly_after_tax_salary, :monthly_internet,:monthly_rent_one_bdrm_inside_city_center, :monthly_rent_one_bdrm_outside_city_center, :monthly_utilities, :on_water, :population_max, :population_min)
    end
end
