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
        email: Faker::Internet.email,
        message: Faker::Lorem.sentence
    )
end

property_one = Property.create(
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Pumpkin Key, Florida Keys",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Pumpkin Key has been a regular on this list as it’s been taken on and off the market over the years. That being said, there’s no better time to buy a private island than now, when we all wish that we’d had one last year.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_two = Property.create(
    image_url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Willow Creek Estancia",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Willow Creek Estancia will appeal to many different lifestyles, but it has the most perks for equestrians, who will be drawn to its 27-stall main barn, additional eight-stall barn and sand arenas.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_three = Property.create(
    image_url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "Stonewall Farm",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Stonewall Farm, which was featured on our list last year, still hasn’t found a buyer willing to shell out $100 million. The epic, 740-acre equestrian estate is Westchester County’s largest, and has produced the winning horses of 40 stakes races.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_four = Property.create(
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    name: "Padaro Lane",
    address: "Cambridge, MA, USA",
    description: "Padaro Lane’s biggest perk is its private beach. Situated in the oceanside town of Carpinteria, which is part of Santa Barbara County, it’s a location that already feels relatively quiet and secluded. ",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_five = Property.create(
    image_url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Villa in the Hills",
    address: "Richmond, VA, USA",
    description: "The Village House is a husband and wife owned restaurant on the Gatineau River in Wakefield, Quebec.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_six = Property.create(
    image_url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Willow Creek Estanci",
    address: "Marblehead Neck, Marblehea, MA, USA",
    description: "Willow Creek Estancia will appeal to many different lifestyles, but it has the most perks for equestrians, who will be drawn to its 27-stall main barn, additional eight-stall barn and sand arenas.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)
property_one = Property.create(
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Pumpkin Key, Florida Keys",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Pumpkin Key has been a regular on this list as it’s been taken on and off the market over the years. That being said, there’s no better time to buy a private island than now, when we all wish that we’d had one last year.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_two = Property.create(
    image_url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Willow Creek Estancia",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Willow Creek Estancia will appeal to many different lifestyles, but it has the most perks for equestrians, who will be drawn to its 27-stall main barn, additional eight-stall barn and sand arenas.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_three = Property.create(
    image_url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "Stonewall Farm",
    address: "Marblehead Neck, Marblehead, MA, USA",
    description: "Stonewall Farm, which was featured on our list last year, still hasn’t found a buyer willing to shell out $100 million. The epic, 740-acre equestrian estate is Westchester County’s largest, and has produced the winning horses of 40 stakes races.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_four = Property.create(
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    name: "Padaro Lane",
    address: "Cambridge, MA, USA",
    description: "Padaro Lane’s biggest perk is its private beach. Situated in the oceanside town of Carpinteria, which is part of Santa Barbara County, it’s a location that already feels relatively quiet and secluded. ",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_five = Property.create(
    image_url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Villa in the Hills",
    address: "Richmond, VA, USA",
    description: "The Village House is a husband and wife owned restaurant on the Gatineau River in Wakefield, Quebec.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

property_six = Property.create(
    image_url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Willow Creek Estanci",
    address: "Marblehead Neck, Marblehea, MA, USA",
    description: "Willow Creek Estancia will appeal to many different lifestyles, but it has the most perks for equestrians, who will be drawn to its 27-stall main barn, additional eight-stall barn and sand arenas.",
    price: Faker::Number.number(digits: 6),
    seller_id: Seller.all.sample.id,
    user_id: User.all.sample.id
)

puts "Done seeding the database!"


