puts "Deleting old data..."
Friendship.destroy_all
User.destroy_all
Comment.destroy_all
puts "Done deleting old data!"


puts "Seeding new Data..."
john = User.create(name: 'john', username: 'john123', user_photo: 'q22342342', password: 'poop')
jacob = User.create(name: 'jacob', username: 'jacob1', user_photo: 'q22342342422342', password: 'poopy')
jack = User.create(name: 'jack', username: 'jack1', user_photo: 'q22342342422342', password: 'poopy')
himer = User.create(name: "himer", username: "himer", user_photo: "himer", password: "himer")

event1 = Event.create(title: "Johns bday", description: "LETS GET FUCKED UP", date: DateTime.now(), category:"Dinner", start_time:"1:00", end_time:"never", user_id: john.id)
comment1 = Comment.create(comment: "this place sucks", user_id: john.id, event_id: event1.id)

friendship1 = Friendship.create(:friend_a_id => john.id, :friend_b_id => jacob.id)

friendship2 = Friendship.create(:friend_a_id => john.id, :friend_b_id => jack.id)

friendship3 = Friendship.create(:friend_a_id => jacob.id, :friend_b_id => himer.id)

friendship4 = Friendship.create(:friend_a_id => jacob.id, :friend_b_id => jack.id)




puts "Done seeding!!!"