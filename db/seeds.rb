# This file should contain all the record creation needed to seed the database with its default values.
puts "Seeding the database..."
# using faker to generate fake data

5.times do
  User.create(
    username: Faker::Name.name,
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password
  )
end

# seller data
5.times do
    Seller.create(
        name: Faker::Name.name,
        email: Faker::Internet.email
    )
end

# property data
5.times do
  Property.create(
      image_url: Faker::LoremFlickr.image,
      name: Faker::Address.community,
      address: Faker::Address.street_address,
      description: Faker::Lorem.paragraph,
      price: Faker::Number.number(digits: 6),
      seller_id: Seller.all.sample.id,
      user_id: User.all.sample.id
  )
end

puts "Done seeding the database!"


