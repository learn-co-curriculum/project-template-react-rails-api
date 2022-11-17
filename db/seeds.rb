puts "Seeding campers..."
volunteer1 =
  Volunteer.create(
    name: "Caitlin Brown",
    age: 18,
    email: "cbrown@gmail.com",
    user_id:
      User.create(
        username: "Caitlin",
        password_digest:
          BCrypt::Engine.hash_secret("Caitlin", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer2 =
  Volunteer.create(
    name: "Lizzie Avery",
    age: 29,
    email: "lavery@gmail.com",
    user_id:
      User.create(
        username: "Lizzie",
        password_digest:
          BCrypt::Engine.hash_secret("Lizzie", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer3 =
  Volunteer.create(
    name: "Tom Tyler",
    age: 35,
    email: "ttyler@gmail.com",
    user_id:
      User.create(
        username: "Tom",
        password_digest:
          BCrypt::Engine.hash_secret("Tom", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer4 =
  Volunteer.create(
    name: "Morgan Chamberlain",
    age: 55,
    email: "mchamberlain@gmail.com",
    user_id:
      User.create(
        username: "Morgan",
        password_digest:
          BCrypt::Engine.hash_secret("Morgan", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer5 =
  Volunteer.create(
    name: "Danny Reyes",
    age: 41,
    email: "dreyes@gmail.com",
    user_id:
      User.create(
        username: "Danny",
        password_digest:
          BCrypt::Engine.hash_secret("Danny", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer6 =
  Volunteer.create(
    name: "Peter Trapini",
    age: 38,
    email: "ptrapini@gmail.com",
    user_id:
      User.create(
        username: "Peter",
        password_digest:
          BCrypt::Engine.hash_secret("Peter", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer7 =
  Volunteer.create(
    name: "Amanda Clark",
    age: 24,
    email: "aclark@gmail.com",
    user_id:
      User.create(
        username: "Amanda",
        password_digest:
          BCrypt::Engine.hash_secret("Amanda", BCrypt::Engine.generate_salt)
      ).id
  )
volunteer8 =
  Volunteer.create(
    name: "Nick Sumeralls",
    age: 34,
    email: "nsumeralls@gmail.com",
    user_id:
      User.create(
        username: "Nick",
        password_digest:
          BCrypt::Engine.hash_secret("Nick", BCrypt::Engine.generate_salt)
      ).id
  )

puts "Seeding activities..."
activity1 =
  Activity.create(
    organization: "Food Bank",
    activity_name: "Packing food",
    activity_description: "Fill boxes with food for Thanksgiving.",
    image: "/images/fill-boxes.jpg"
  )
activity2 =
  Activity.create(
    organization: "Animal Shelter",
    activity_name: "Dog walking",
    activity_description: "Take a dog to the park for a walk.",
    image: "/images/dog-walking.jpeg"
  )
activity3 =
  Activity.create(
    organization: "Branching Out",
    activity_name: "Planting trees",
    activity_description: "Planting trees in neighborhoods where needed.",
    image: "/images/plant-nature.jpg"
  )
activity4 =
  Activity.create(
    organization: "Biome Elementary",
    activity_name: "Tutor a student",
    activity_description: "Tutor students in subjects where they struggle.",
    image: "/images/tutor-students.jpg"
  )
activity5 =
  Activity.create(
    organization: "Grab and Go",
    activity_name: "Delivering food",
    activity_description: "Delivering food to people who are unable to drive.",
    image: "/images/food-bank.jpg"
  )
activity6 =
  Activity.create(
    organization: "More Than A Market",
    activity_name: "Cleaning and shelving",
    activity_description:
      "Clean this local market and shelf food for the underserved.",
    image: "/images/food-pantry.jpg"
  )
activity7 =
  Activity.create(
    organization: "Cooking Up",
    activity_name: "Serve food",
    activity_description: "Serve food to guests of our food kitchen",
    image: "/images/food-kitchen.jpg"
  )
activity8 =
  Activity.create(
    organization: "Notes of Community",
    activity_name: "Teach music",
    activity_description:
      "Teach music and cultivate the next generation of musicians.",
    image: "/images/teach-music.jpg"
  )

puts "Seeding signups..."
Signup.create(
  volunteer_id: volunteer1.id,
  activity_id: activity1.id,
  date: "11-15-22",
  time: 11
)
Signup.create(
  volunteer_id: volunteer2.id,
  activity_id: activity2.id,
  date: "12-10-22",
  time: 12
)
Signup.create(
  volunteer_id: volunteer3.id,
  activity_id: activity3.id,
  date: "11-20-22",
  time: 15
)
Signup.create(
  volunteer_id: volunteer4.id,
  activity_id: activity4.id,
  date: "11-25-22",
  time: 11
)
Signup.create(
  volunteer_id: volunteer5.id,
  activity_id: activity5.id,
  date: "12-15-22",
  time: 12
)
Signup.create(
  volunteer_id: volunteer6.id,
  activity_id: activity6.id,
  date: "12-20-22",
  time: 16
)
Signup.create(
  volunteer_id: volunteer7.id,
  activity_id: activity7.id,
  date: "12-05-22",
  time: 11
)
Signup.create(
  volunteer_id: volunteer8.id,
  activity_id: activity8.id,
  date: "12-01-22",
  time: 12
)

puts "✅ Done seeding!"
