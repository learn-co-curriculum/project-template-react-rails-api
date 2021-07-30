# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing old data..."
User.destroy_all
Payment.destroy_all
ShoppingCart.destroy_all
CartItem.destroy_all
PressOn.destroy_all
Glue.destroy_all
HandCare.destroy_all

puts "Seeding users..."
u1 = User.create(name: "Suey")

puts "Seeding shopping_cart..."
sc1 = ShoppingCart.create(user_id: u1.id)

puts "Seeding payment..."
p1 = Payment.create(user_id: u1.id, shopping_cart_id: sc1.id)

puts "Seeding press_Oon..."
po1 = PressOn.create(name: "press_on1")

puts "Seeding glue..."
g1 = Glue.create(name: "glue1")

puts "Seeding handCare..."
hc1 = HandCare.create(name: "hand_care1")

puts "Seeding cart_item..."
ct1 = CartItem.create(shoping_cart_id: sc1.id, item_id:po1.id, item_type:"PressOn")
ct1 = CartItem.create(shoping_cart_id: sc1.id, item_id:g1.id, item_type:"Glue")
ct1 = CartItem.create(shoping_cart_id: sc1.id, item_id:hc1.id, item_type:"HandCare")






puts "🌱🌱🌱🌱 Done! 🌱🌱🌱🌱"

