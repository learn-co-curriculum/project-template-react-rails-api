# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding..."

#Users
u1 = User.create(username: "test", password: "password", email: "felipalouise@gmail.com")

#company
c = Company.create(name: "Microsoft Corp", symbol:"MSFT")

#userstocks
us = UserStock.create(name:"Microsoft Corp", symbol:"MSFT", price: 311.90, company_id: c.id, user_id: u1.id )


puts "Done! 🌱"