puts "Seeding..."
parent1 = Parent.create( 
    # image: "https://images.pexels.com/photos/2480948/pexels-photo-2480948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    name: "Brandon",
    kids: "Billy",
    age: 4,
    emergency: true,
    location: "Houston, TX",
    early: true,
    nightOwl: false,
    verified: true,
)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'wael', email: 'wael@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'brian', email: 'brian@gmail.com', admin: true, password: "password")
puts "Done seeding!"
