# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Cities"

City.create(city: "Charlotte", region: "North Carolina", country: "United States of America", currency: "USD", latitude: 35.226944444, longitude: -80.843333333, elevation_meters: 229, on_water: false,population: 874579, monthly_after_tax_salary: 4333.52, apt_price_per_meter2_outside_city_center: 1695.89, apt_price_per_meter2_inside_city_center: 3514.44, monthly_rent_one_bdrm_outside_city_center: 1058.32, monthly_rent_one_bdrm_inside_city_center: 1538.04, monthly_utilities: 143.63, monthly_internet: 59.61, wikidata_id: "Q16565")

City.create(city: "Charleston", region: "South Carolina", country: "United States of America", currency: "USD", latitude: 32.776111111, longitude: -79.9325, elevation_meters: 6, on_water: true, population: 150227, monthly_after_tax_salary: 3863.14, apt_price_per_meter2_outside_city_center: 2426.36, apt_price_per_meter2_inside_city_center: 5180.96, monthly_rent_one_bdrm_outside_city_center: 1372.6, monthly_rent_one_bdrm_inside_city_center: 1795.24, monthly_utilities: 207.43, monthly_internet: 61.53, wikidata_id: "Q47716")