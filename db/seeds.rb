# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'bob', username: 'bob123', email: 'bob@gmail.com')

Post.create(title: 'hello', body: 'bye', user_id: 1)

Comment.create(text: 'good', post_id: 1, username: 'bob')

Like.create(post_id: 1, username: 'bob')