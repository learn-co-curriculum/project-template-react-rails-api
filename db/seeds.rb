# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.create({
    name: "Kamakis",
    location: "Kiambu",
    review: "incredible"
})
Menu.create({
    name: "steak",
    description: "tantalizing",
    restaurant_id: 1,
    price: 350,
    img:"https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA="
})