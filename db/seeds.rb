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

Dish.create(name: "Eggplant with Garlic Sauce", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/i9cUwUW.jpg", restaurant_name: "Aloy Thai Cuisine" , city_name: "Boulder")
Dish.create(name: "Honey Walnut Shrimp", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/McRP6ep.jpg", restaurant_name: "ChoLon" , city_name: "Westminster")
Dish.create(name: "Bibimbap", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/iaa259Z.jpg", restaurant_name: "Q House" , city_name: "Denver")
Dish.create(name: "Lemon Chicken", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/q0xFjqx.jpg", restaurant_name: "Super Star Asian Cuisine" , city_name: "Broomfield")
Dish.create(name: "Ginger Beef", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/OFDrrpq.jpg", restaurant_name: "Gaku" , city_name: "Denver")
Dish.create(name: "Kung Pao Chicken", cuisine: "stir-fry", price: rand(5...15), image_url: "https://i.imgur.com/rzthmU1.jpg", restaurant_name: "Pepper Asian Bistro" , city_name: "Colorado Springs")
Dish.create(name: "Pad See Ew", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/2Z4S8j2.jpg", restaurant_name: "Fortune Wok to Table" , city_name: "Fort Collins")
Dish.create(name: "Drunken Noodles", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/AYvQwu7.jpg", restaurant_name: "South Garden" , city_name: "Denver")
Dish.create(name: "Pho 6 (brisket)", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/DmiqTVr.jpg", restaurant_name: "Pho cafe" , city_name: "Aspen")
Dish.create(name: "Miso Ramen", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/zDNK2VK.jpg", restaurant_name: "Miyako Ra-men Spot" , city_name: "Vail")
Dish.create(name: "Pancit", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/SUMrFvi.jpg", restaurant_name: "JING Denver" , city_name: "Denver")
Dish.create(name: "Pad Thai", cuisine: "noodles", price: rand(5...15), image_url: "https://i.imgur.com/gi7I4Bk.jpg", restaurant_name: "Pei Wei Asian Kitchen" , city_name: "Aurora")
Dish.create(name: "Siu Mai", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/t4laZfQ.jpg", restaurant_name: "Lanshing Cafe" , city_name: "Boulder")
Dish.create(name: "Nam Jyu Zing Zyu Shou", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/vD13nYt.jpg", restaurant_name: "Star Kitchen" , city_name: "Denver")
Dish.create(name: "Har Gow", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/Ye9Z6gd.jpg", restaurant_name: "The Empress Seafood Restaurant" , city_name: "Devner")
Dish.create(name: "Cha Sui Bao", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/dHyFpaW.jpg", restaurant_name: "Sweet Ginger Asian Bistro" , city_name: "Colorado Springs")
Dish.create(name: "Xio Long Bao", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/iCXv0oW.jpg", restaurant_name: "Blue Ocean" , city_name: "Brekenridge")
Dish.create(name: "Wodan Niuroufan", cuisine: "dim-sum", price: rand(5...15), image_url: "https://i.imgur.com/7gT0XPE.jpg", restaurant_name: "Thai Basil" , city_name: "Grand Junction")

puts "done seeding dishs"
puts "seeding reviews"

70.times do 
    Review.create(comment: Faker::Restaurant.review)
end

puts "done seeding"