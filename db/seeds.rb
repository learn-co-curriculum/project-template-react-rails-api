puts "Seeding..."
u1 = User.create(name: 'wael', email: 'wael@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'brian', email: 'brian@gmail.com', admin: true, password: "password")
puts "Done seeding!"
