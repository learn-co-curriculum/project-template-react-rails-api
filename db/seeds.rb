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
u1 = User.create(name: "Suey", password_digest: "123", billing_address: "seattle", shipping_address: "seattle", email:"suey@gmail.com", birthday: Date.parse('2001-02-03'))
u2 = User.create(name: "Bri", password_digest: "123", billing_address: "Los Angeles", shipping_address: "Los Angeles", email:"bri@gmail.com", birthday: Date.parse('2002-02-03'))

puts "Seeding shopping_cart..."
sc1 = ShoppingCart.create(user_id: u1.id)
sc2 = ShoppingCart.create(user_id: u1.id) #purchase
sc3 = ShoppingCart.create(user_id: u1.id) #purchase

puts "Seeding payment..."
p1 = Payment.create(user_id: u1.id, shopping_cart_id: sc2.id)
p1 = Payment.create(user_id: u1.id, shopping_cart_id: sc3.id)

puts "Seeding press_Oon..."
po1 = PressOn.create(name: "press_on1")
po2 = PressOn.create(name: "press_on2")

puts "Seeding glue..."
g1 = Glue.create(name: "glue1")

puts "Seeding handCare..."
hc1 = HandCare.create(name: "hand_care1", image: "abc", description: "abc", price: 12.99, quantity: 11)

puts "Seeding cart_item..."
ct1 = CartItem.create(shopping_cart_id: sc1.id, item_id:po1.id, item_type:"PressOn")
ct2 = CartItem.create(shopping_cart_id: sc1.id, item_id:g1.id, item_type:"Glue")
ct3 = CartItem.create(shopping_cart_id: sc1.id, item_id:hc1.id, item_type:"HandCare")







puts "🌱🌱🌱🌱 Done! 🌱🌱🌱🌱"


