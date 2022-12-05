# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
puts 'seeding'
Restaurant.create([{
    name: "Kamakis",
    location: "Kiambu",
    review: "incredible"
},{
    name: "Kamakis",
    location: "Kiambu",
    review: "incredible"
},{
    name: "Kamakis",
    location: "Kiambu",
    review: "incredible"
},{
    name: "Kamakis",
    location: "Kiambu",
    review: "incredible"
}])
Menu.destroy_all
puts 'seeding Menu'
Menu.create([{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 1,
    price: 350,
    img:"https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 1,
    price: 350,
    img:"https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 3,
    price: 350,
    img:"https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id:4,
    price: 350,
    img:"https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png"
}])