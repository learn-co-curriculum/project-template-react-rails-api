Book.destroy_all
30.times do
    Book.create(title: Faker::Book.title, author: Faker::Book.author, year: rand(1980..2022), description: Faker::Book.genre)
end

User.destroy_all
5.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Name.middle_name, password: '1234', image_url: rand(1..5))
end

Review.destroy_all
5.times do
    Review.create(rating: rand(1..5), message: Faker::Restaurant.review, book_id: rand(1..30), user_id: rand(1..5))
end