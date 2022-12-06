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
    name: "Njuguna's Place",
    location: "Nairobi",
    review: "nyama and vbes"
},{
    name: "Road House Grill",
    location: "Nairobi",
    review: "amazing nyama at cheap prices!"
},{
    name: "Truce Lounge",
    location: "Kiambu",
    review: "simply the best!"
}])
Menu.destroy_all
puts 'seeding Menu'
Menu.create([{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 1,
    price: 600,
    img:"https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 2,
    price: 450,
    img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&w=1000&q=80"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id: 3,
    price: 350,
    img:"https://www.shutterstock.com/image-photo/grilled-beef-steaks-spices-on-260nw-439021402.jpg"
},{
    name: "steak",
    description: "tantalizing",
    restaurant_id:4,
    price: 1150,
    img:"https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?cs=srgb&dl=pexels-malidate-van-769289.jpg&fm=jpg"
}])