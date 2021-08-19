# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Friendship.destroy_all
User.destroy_all



john = User.create(name: 'john', username: 'johnnn', user_photo: 'q22342342', password_digest: 'poop')
jacob = User.create(name: 'jacob', username: 'jacobbbb', user_photo: 'q22342342422342', password_digest: 'poopy')

friendship = Friendship.create(:friend_a_id => john.id, :friend_b_id => jacob.id)
puts "done seeding"