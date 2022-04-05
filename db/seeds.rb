puts "seeding"

User.create(username:"Miranda", password:"kirby")
Character.create(user_id:1, name:"Hermie", str:0, ag:0, intel:0, exp:0, exp_gain:1)

puts "Done Seeding"