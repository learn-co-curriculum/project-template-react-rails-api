puts "seeding"

User.create(username:"Miranda", password:"kirby")
Character.create(user_id:1, name:"Hermie", str:0, ag:0, intel:0, exp:0, exp_gain:1, charClass:"crab", level:0)


Enemy.create(name:"Goblin", attack: 10, level: 1, defense:0)
Enemy.create(name:"Ogre", attack: 15, level: 2, defense:5)
Enemy.create(name:"Dragon", attack: 20, level: 3, defense:10)

puts "Done Seeding"