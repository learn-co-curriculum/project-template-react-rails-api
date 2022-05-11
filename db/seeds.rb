puts "Seeding..."
user1 = User.create( 
    image: "https://images.pexels.com/photos/2480948/pexels-photo-2480948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    name: "Wael",
    email: "wael@gmail.com",
    kid: "Billy",
    age: 4,
    address: "jersey city, NJ",
    early: true,
    nightOwl: true,
    verified: true,
    emergency: true,
    admin: true, 
    password: "password"
)


u2 = User.create(name: 'brian', email: 'brian@gmail.com', admin: true, password: "password")
puts "Done seeding!"
