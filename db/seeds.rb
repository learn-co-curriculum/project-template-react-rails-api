puts "Resetting database..."
Avatar.destroy_all
Avatar.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence
Question.destroy_all
Question.reset_pk_sequence
GameInstance.destroy_all
GameInstance.reset_pk_sequence


puts "Seeding avatars..."
adventurer = Avatar.create(name: "Adventurer", img_url: "../client/public/images/avatars/adventurer_looking.png")
hiker = Avatar.create(name: "Hiker", img_url: "../client/public/images/avatars/adventurer_walkingstick.png")
archer = Avatar.create(name: "Archer", img_url: "../client/public/images/avatars/bow.png")
crossbow = Avatar.create(name: "Arbalist", img_url: "../client/public/images/avatars/crossbow.png")
dragon = Avatar.create(name: "Dragon", img_url: "../client/public/images/avatars/dragon.png")
druid = Avatar.create(name: "Druid", img_url: "../client/public/images/avatars/druid.png")
knight = Avatar.create(name: "Knight", img_url: "../client/public/images/avatars/knight.png")
sorcerer = Avatar.create(name: "Sorcerer", img_url: "../client/public/images/avatars/magician.png") 
wizard = Avatar.create(name: "Hiker", img_url: "../client/public/images/avatars/wizard.png")

puts "Seeding users..."
user1 = User.create(username: "Alex", password: "123", avatar_id: dragon.id)
user2 = User.create(username: "Joshua", password: "123", avatar_id: crossbow.id)
user3 = User.create(username: "Shannon", password: "123", avatar_id: sorcerer.id)

puts "Seeding questions..."
q1 = Question.create(question: "question 1", answer: "answer 1")
q2 = Question.create(question: "question 2", answer: "answer 2")
q3 = Question.create(question: "question 3", answer: "answer 3")
q4 = Question.create(question: "question 4", answer: "answer 4")
q5 = Question.create(question: "question 5", answer: "answer 5")

puts "Seeding game instances..."
game1 = GameInstance.create(score: 3, user_id: user1.id)
game2 = GameInstance.create(score: 4, user_id: user2.id)
game3 = GameInstance.create(score: 5, user_id: user3.id)

puts "Done seeding!"


