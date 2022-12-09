Book.destroy_all
20.times do
    Book.create(title: Faker::Book.title, author: Faker::Book.author, year: rand(1980..2022), genre: Faker::Book.genre,   description: Faker::Quotes::Shakespeare.as_you_like_it_quote
    )
end

User.destroy_all
5.times do
    User.create(username: Faker::Name.middle_name, password: '1234')
end

Review.destroy_all
30.times do
    Review.create(rating: rand(1..5), review: Faker::Quote.famous_last_words, book_id: rand(1..30), user_id: rand(1..5))
end