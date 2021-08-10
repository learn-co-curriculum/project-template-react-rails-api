# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating users..."
User.create(name: 'Jack', password_digest: 'book', fav_genre: 'fantasy', bio: 'A bibliophile who owns at least 7 copies of The Lord of the Rings')

puts "Creating books..."
Book.create(title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', genre: 'fantasy', length: '1197 pages', pub_date: 'July 29, 1954', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F33.The_Lord_of_the_Rings&psig=AOvVaw0eL2lQwSfYj38dSn50r_du&ust=1628703296573000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICs9t3-pvICFQAAAAAdAAAAABAF')

puts "Creating shelves..."
Shelf.create(user_id: 1, book_id: 1)

puts "Creating reviews..."
Review.create(user_id: 1, book_id: 1, rating: 10, content: 'Came for the dwarf but stayed for the prose')