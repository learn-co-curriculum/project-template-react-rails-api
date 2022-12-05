Book.destroy_all
30.times do
    Book.create(title: Faker::Book.title, author: Faker::Book.author, year: rand(1980..2022), description: Faker::Book.genre)
end

Review.destroy_all
5.times do
    Review.create(rating: rand(1..5), message: Faker::Restaurant.review, book_id: Book.all.ids.sample, user_id: User.all.ids.sample)
end

