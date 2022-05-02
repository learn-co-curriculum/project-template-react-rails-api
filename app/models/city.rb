class City < ApplicationRecord
    scope :filter_by_population_max, -> (pop_max) { where population: ..pop_max }
    scope :filter_by_population_min, -> (pop_min) { where population: pop_min.. }
    scope :filter_by_monthly_after_tax_salary, -> (salary_min) { where monthly_after_tax_salary: salary_min.. }
    scope :filter_by_on_water, -> (on_water) { where on_water: on_water }
    scope :filter_by_apt_price_per_meter2_inside_city_center, -> (price_max) { where apt_price_per_meter2_inside_city_center: ..price_max }
    scope :filter_by_apt_price_per_meter2_outside_city_center, -> (price_max) { where apt_price_per_meter2_outside_city_center: ..price_max }
    scope :filter_by_monthly_rent_one_bdrm_inside_city_center, -> (rent_max) { where monthly_rent_one_bdrm_inside_city_center: ..rent_max }
    scope :filter_by_monthly_rent_one_bdrm_outside_city_center, -> (rent_max) { where monthly_rent_one_bdrm_outside_city_center: ..rent_max }
    scope :filter_by_monthly_internet, -> (internet_max) { where monthly_internet: ..internet_max }
    scope :filter_by_monthly_utilities, -> (utilities_max) { where monthly_utilities: ..utilities_max }
end

