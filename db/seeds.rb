require 'faker'

puts "Deleting Database"
Household.destroy_all
User.destroy_all
Chore.destroy_all
ChildChore.destroy_all

puts "Seeding Data"

puts "Seeding Households..."
3.times do 
    Household.create(
        last_name: Faker::Name.last_name
    )
end

puts "Seeding Users..."
10.times do
    User.create!(
        first_name: Faker::Name.first_name,
        email: Faker::Internet.email,
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
        is_parent: Faker::Boolean.boolean,
        household_id: Household.ids.sample
    )
end

chores = ["wash the dishes", "mow the lawn", "clean your room", "make your bed", "take out the trash", "wash the car", "clean the garage", "shovel driveway", "pull weeds", "clean the counters", "do homework", "vacuum", "mop the floors", "give mom a massage", "get dad a beer"]
i = 0
puts "Seeding Chores..."
15.times do 
    Chore.create(
        chore_name: chores[i],
        description: Faker::Lorem.paragraph,
        min_age: rand(7..18),
        household_id: Household.ids.sample
    )
    i += 1
end

puts "Seeding Child Chores..."
10.times do 
    ChildChore.create(
        reward: [5, 10, 15, 20, 25].sample,
        time_to_complete: [15, 30, 45, 60].sample,
        is_completed: false,
        user_id: User.all.where("is_parent = ?", false).ids.sample,
        chore_id: Chore.ids.sample
    )
end

puts "Finished Seeding!"


