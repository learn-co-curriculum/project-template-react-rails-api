# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
#

puts "Seeding..."

#Users
user = User.create(name: "test", email: "test@test.com", password: "password", address: "456 Main")

#Restaurants
restaurant = Restaurant.create(name: "test restaurant", username: "test_user", password: "password", address: "123 Main", description: "A test restaurant", delivery_fee: 5.0, hours: "9am - 10pm")

#Orders
order = Order.create(user:user, restaurant:restaurant, total: 10.0)

#Menus
menu = Menu.create(restaurant: restaurant)

#Menu Items
menu_item = MenuItem.create(menu: menu, restaurant: restaurant, name: "test menu item", price: 10.0, description: "a test menu item", item_type: "side")

#Order Items
order_item = OrderItem.create(order_id: order.id, menu_item_id: menu_item.id)

puts "Done! 🌱"






