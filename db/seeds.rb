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
# 5.times do
#   Property.create(
#       image_url: Faker::LoremFlickr.image,
#       name: Faker::Address.community,
#       address: Faker::Address.street_address,
#       description: Faker::Lorem.paragraph,
#       price: Faker::Number.number(digits: 6),
#       seller_id: Seller.all.sample.id,
#       user_id: User.all.sample.id
#   )
# end

property_one = Property.create(
    image_url: "https://unsplash.com/photos/178j8tJrNlc",
    name: "Pumpkin Key, Florida Keys",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Pumpkin Key has been a regular on this list as it’s been taken on and off the market over the years. That being said, there’s no better time to buy a private island than now, when we all wish that we’d had one last year.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_two = Property.create(
    image_url: "https://unsplash.com/photos/TiVPTYCG_3E",
    name: "Willow Creek Estancia",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Willow Creek Estancia will appeal to many different lifestyles, but it has the most perks for equestrians, who will be drawn to its 27-stall main barn, additional eight-stall barn and sand arenas.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_three = Property.create(
    image_url: "https://unsplash.com/photos/4ojhpgKpS68",
    name: "Stonewall Farm",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Stonewall Farm, which was featured on our list last year, still hasn’t found a buyer willing to shell out $100 million. The epic, 740-acre equestrian estate is Westchester County’s largest, and has produced the winning horses of 40 stakes races.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_four = Property.create(
    image_url: "https://unsplash.com/photos/mR1CIDduGLc",
    name: "Padaro Lane",
    address: "Cambridge, MA, USA",
    description: "Padaro Lane’s biggest perk is its private beach. Situated in the oceanside town of Carpinteria, which is part of Santa Barbara County, it’s a location that already feels relatively quiet and secluded. ",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_five = Property.create(
    image_url: "https://unsplash.com/photos/aren8nutd1Q",
    name: "Villa in the Hills",
    address: "Richmond, VA, USA",
    description: "The Village House is a husband and wife owned restaurant on the Gatineau River in Wakefield, Quebec.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

puts "Done seeding the database!"


