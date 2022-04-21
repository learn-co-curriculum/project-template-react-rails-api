puts "seeding"

User.create(username:"Miranda", password:"kirby")
Character.create(user_id:1, name:"Hermie", str:0, ag:0, intel:0, exp:0, exp_gain:1, charClass:"crab", level:0)


Enemy.create(name:"Goblin", attack: 10, level: 1, defense:0)
Enemy.create(name:"Ogre", attack: 15, level: 2, defense:5)
Enemy.create(name:"Dragon", attack: 20, level: 3, defense:10)

RandomEvent.create(imageurl:"https://i.pinimg.com/originals/56/a9/83/56a9830d4ad8be99b32286ed7d792fa1.jpg", situation:"You see something shiny at the bottom of a well.", prompt_1:"Jump down and get it", prompt_2:"Try to use the bucket to scoop it up", effect_1:"damage:100, gold:200", effect_2:"health:50")
RandomEvent.create(imageurl:"https://st2.depositphotos.com/2978265/5421/v/600/depositphotos_54215377-stock-illustration-homeless-man-with-a-dog.jpg",situation:"You walk by a man begging for spare change.", prompt_1:"Give him 20 gold", prompt_2:"Pretend not to see him", effect_1:"health:20, gold:-20", effect_2:"nothing")
RandomEvent.create(imageurl:"https://cdna.artstation.com/p/assets/images/images/014/690/998/large/patricia-hartmans-polly-abgabe.jpg?1545049293",situation:"You see a health potion on sale while passing a cart.", prompt_1:"Buy it for 10 gold", prompt_2:"Shrug and walk away", effect_1:"health:50, gold:-10", effect_2:"nothing")

puts "Done Seeding"