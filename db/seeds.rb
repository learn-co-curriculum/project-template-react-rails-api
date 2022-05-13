puts "Seeding..."
user1 = User.create!( 
    image: "https://images.pexels.com/photos/2480948/pexels-photo-2480948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    username: "wanda",
    email: "wanda@gmail.com",
    name: "Billy",
    age: 10,
    address: "westview, NJ",
    early: true,
    nightOwl: true,
    emergency: true,
    admin: true, 
    password: "password"
)


user2 = User.create!(
    image: "https://assets.teenvogue.com/photos/586fb5d4f77a0c673d72629f/1:1/w_2417,h_2417,c_limit/GettyImages-165443495.jpg" ,
    username: 'vision', 
    email: 'vision@gmail.com', 
    name: "tommy",
    age: 10,
    address: "westview, NJ",
    early: true,
    nightOwl: true,
    emergency: true,
    admin: true, 
    password: "password"
)



playdate = Playdate.create!(
    date: "today",
    location: "jersey city, NJ",
    parent_id: user2.id,
    user_id: user1.id
)

puts "Done seeding!"
