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

# scope :filter_by_pop_max, -> (pop_max) { where population: pop_max.. }
#     scope :filter_by_pop_min, -> (pop_min) { where population: ..pop_min }
#     scope :filter_by_salary_min, -> (salary_min) { where monthly_after_tax_salary: ..salary_min }
#     scope :filter_by_water, -> (on_water) { where on_water: on_water }
#     scope :filter_by_apt_price_in_cc, -> (price_max) { where apt_price_per_meter2_inside_city_center: price_max.. }
#     scope :filter_by_apt_price_out_cc, -> (price_max) { where apt_price_per_meter2_outside_city_center: price_max.. }
#     scope :filter_by_rent_out_cc, -> (rent_max) { where monthly_rent_one_bdrm_outside_city_center: rent_max.. }
#     scope :filter_by_internet, -> (internet_max) { where monthly_internet: internet_max.. }
#     scope :filter_by_utilities, -> (utilities_max) { where monthly_utilities: utilities_max.. }
# Parameters {"apt_price_per_meter2_inside_city_center"=>"3000", "apt_price_per_meter2_outside_city_center"=>"4000", "monthly_after_tax_salary"=>"4000", "monthly_internet"=>"50", "monthly_rent_one_bdrm_inside_city_center"=>"3000", "monthly_rent_one_bdrm_outside_city_center"=>"3300", "monthly_utilities"=>"100", "on_water"=>"true", "population_max"=>"900000", "population_min"=>"23000"} permitted: true>