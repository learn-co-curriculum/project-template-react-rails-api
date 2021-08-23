# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Friendship.destroy_all
User.destroy_all



john = User.create(name: 'john', username: 'john123', user_photo: 'q22342342', password: 'poop')
jacob = User.create(name: 'jacob', username: 'jacob1', user_photo: 'q22342342422342', password: 'poopy')
jack = User.create(name: 'jack', username: 'jack1', user_photo: 'q22342342422342', password: 'poopy')

event1 = Event.create(title: "Johns bday", description: "LETS GET FUCKED UP", date: DateTime.now(), category:"Dinner", start_time:"1:00", end_time:"never", user_id: john.id)
comment1 = Comment.create(comment: "this place sucks", user_id: john.id, event_id: event1.id)

friendship1 = Friendship.create(:friend_a_id => john.id, :friend_b_id => jacob.id)
friendship2 = Friendship.create(:friend_a_id => john.id, :friend_b_id => jack.id)



puts "done seeding"