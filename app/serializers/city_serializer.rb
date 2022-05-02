class CitySerializer < ActiveModel::Serializer
  attributes :id, :city, :region, :country, :currency, :latitude, :longitude, :elevation_meters, :monthly_after_tax_salary, :apt_price_per_meter2_outside_city_center, :apt_price_per_meter2_inside_city_center, :monthly_rent_one_bdrm_outside_city_center, :monthly_rent_one_bdrm_inside_city_center, :monthly_utilities, :monthly_internet
end
