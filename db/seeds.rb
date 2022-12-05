puts "seeding User data"
Arman = User.create(username: "Arman", password_digest: "hey!", age: 21, sex: "female", calories_goal: 2400)
Harry = User.create(username: "Harry", password_digest: "heyyy!", age: 20, sex: "male", calories_goal: 2400)
Raj = User.create(username: "Raj", password_digest: "heyu!", age: 35, sex: "male", calories_goal: 2400)
Jennifer = User.create(username: "Jennifer", password_digest: "heyuuu!", age: 75, sex: "female", calories_goal: 2400)
William = User.create(username: "William", password_digest: "hello!", age: 17, sex: "male", calories_goal: 2400)
Sparrow = User.create(username: "Sparrow", password_digest: "bye!", age: 47, sex: "male", calories_goal: 2400)
Jack = User.create(username: "Jack", password_digest: "cheese!", age: 56, sex: "male", calories_goal: 2400)

puts "Seeding exercise data"
Exercise.create(name: "deadlift", duration: 30, calories_burnt: 100, user: Arman)
Exercise.create(name: "rowing", duration: 30, calories_burnt: 250, user: Raj)
Exercise.create(name: "deadlift", duration: 30, calories_burnt: 100, user: Harry)
Exercise.create(name: "rowing", duration: 30, calories_burnt: 250, user: Jack)
Exercise.create(name: "deadlift", duration: 30, calories_burnt: 100, user: Jennifer)
Exercise.create(name: "deadlift", duration: 30, calories_burnt: 100, user: Sparrow)
Exercise.create(name: "deadlift", duration: 30, calories_burnt: 100, user: William)

puts "Seeding Food data"
Food.create(name: "Apple", weight: 183, calories: 94, user: Arman)
Food.create(name: "Orange", weight: 184, calories: 86, user: Raj)
Food.create(name: "Banana", weight: 136, calories: 121, user: Harry)
Food.create(name: "Blueberry", weight: 27, calories: 15, user: William)
Food.create(name: "Strawberries", weight: 268, calories: 85, user: Jack)
Food.create(name: "Blackberries", weight: 20, calories: 8, user: Sparrow)
Food.create(name: "Apple", weight: 183, calories: 94, user: Jennifer)