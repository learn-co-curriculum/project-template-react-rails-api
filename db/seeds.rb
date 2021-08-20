# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Dish.destroy_all
Review.destroy_all

puts "seeding started"

24.times do 
    User.create(name: Faker::Name.name)
end 

puts "users made"

puts "making dish"

Dish.create(name: "Eggplant with Garlic Sauce", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Honey Walnut Shrimp", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Bibimbap", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Lemon Chicken", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Ginger Beef", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Kung Pao Chicken", cuisine: "stiry-fry", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Pad See Ew", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Drunken Noodles", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Pho 6(brisket)", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Miso Ramen", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Pancit", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Pad Thai", cuisine: "noodles", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Siu Mai", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Nam Jyu Zing Zyu Shou", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Har Gow", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Cha Sui Bao", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Xio Long Bao", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)
Dish.create(name: "Wodan Niuroufan", cuisine: "dim-sum", price: rand(5..70), image_url: "", street_name: Faker::Address.street_name, city_name: Faker::Address.city)

puts "done seeding dishs"
puts "seeding reviews"

70.times do 
    Review.create(comment: Faker::Restaurant.review)
end

puts "done seeding"