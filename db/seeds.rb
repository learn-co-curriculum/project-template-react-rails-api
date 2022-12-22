# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Comment.destroy_all
Post.destroy_all



puts'seeding begin✅'

10.times do
    User.create( username: Faker::Internet.username, avatar: Faker::Avatar.image, email: Faker::Internet.email, password_digest: "1234")
end

10.times do
    Post.create(image_url: Faker::LoremFlickr.image, description: Faker::Quote.famous_last_words)
end

all_users = User.all
all_posts = Post.all

30.times do
    Comment.create(content: Faker::Quote.famous_last_words, user_id: all_users.sample.id,  post_id:all_posts.sample.id)
end


puts "seeding done✅"
