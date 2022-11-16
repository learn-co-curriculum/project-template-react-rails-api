# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
PlantPost.destroy_all
Review.destroy_all

states = 
['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

booleanValue = ['true', 'false']


brooke = User.create(username: 'Brooke123', password: "123456789")
cindy = User.create(username: 'Cindy42', password: "5432123456")
mustafa = User.create(username: 'Mustafa7', password: "6789011111")


puts "Seeding Plant Posts..."
99.times do
    PlantPost.create(plant_name: Faker::Tea.variety , image: Faker::LoremFlickr.image, state: states.sample, indoor: booleanValue.sample, pet_safe: booleanValue.sample, user_id: User.all.sample.id)
end

# t.string "image"
# t.bigint "user_id", null: false
# t.string "plant_name"
# t.boolean "indoor"
# # t.string "state"
# t.boolean "pet_safe"


puts "Seeding Reviews..."
30.times do
    Review.create(comment: Faker::Quote.famous_last_words[5..200] , user_id: User.all.sample.id, plant_post_id: PlantPost.all.sample.id)
end


puts "✅ Done seeding!"