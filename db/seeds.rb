# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.destroy_all
Review.destroy_all
User.destroy_all
puts "seeds destroyed"


puts "creating admin-users..."
user1 = User.create(first_name: 'McKinsey', last_name: 'Leckenby', username:"mckinsey6917", password_digest: BCrypt::Password.create('mckinsey01'))
user2 = User.create(first_name: 'Brandi', last_name: 'Ude', username:"bude123", password_digest: BCrypt::Password.create('brandi01'))

puts "Seeding locations..."
location1 = Location.create(city: 'Chicago', name: "Argo Tea Cafe", address: "3135 North Broadway Street", details: "To the left of counter then head straight back")
location2 = Location.create(city: 'Chicago', name: "Trader Joe's", address: "44 East Ontario Street", details: "Keep walking straight after you enter and head to back of store. Two bathrooms available behind the produce")
location3 = Location.create(city: 'Chicago', name: "All Women", address: "2000 W Armitage Ave", details: "2nd floor location above the dentist office at the NW corner of Damen and Armitage")
location4 = Location.create(city: 'Chicago', name: "Cafe de Luca ", address: "1721 N Damen Ave", details: "Midway through the restaurant on the right side are two unisex locking bathrooms")
location5 = Location.create(city: 'Chicago', name: "Treat", address: "1616 N Kedzie", details: "Through the dining room, on your right")
location6 = Location.create(city: 'Chicago', name: "FreeGeek Chicago", address: "3411 West Diversey Avenue", details: "In the basement of the Foot Locker building. Entrance is around back near the convenience store entrance")
location7 = Location.create(city: 'Chicago', name: "Chicago Diner", address: "3411 N Halsted Ave.", details: "In back of restaurant")
location8 = Location.create(city: 'Chicago', name: "Starbucks North & Wells", address: "200-230 W. North Ave", details: "There are two stalls. No gender on door.")
location9 = Location.create(city: 'Chicago', name: "DePaul University", address: "2315 N Kenmore Ave", details: "All floors have a single stall gender neutral bathroom in the hallway to the left and right.")
location10 = Location.create(city: 'Chicago', name: "Filter Coffee Shop", address: "1373-75 N Milwaukee Ave", details: "Straight ahead after you enter just before the swinging doors to the kitchen are two individually locking bathrooms with no signage at all")
location11 = Location.create(city: 'Chicago', name: "Loyola University Chicago", address: "26 E. Pearson St", details: "1st floor of the Terry Student Center, right next to the elevators")
location12 = Location.create(city: 'Chicago', name: "Barnes & Noble Clybourn", address: "1441 W. Webster Ave", details: "No Directions")
location13 = Location.create(city: 'Chicago', name: "Broadway Youth Center", address: "3179 N Broadway St.", details: "No Directions")
location14 = Location.create(city: 'Chicago', name: "Hot Doug's", address: "3324 North Califronia St.", details: "No Directions")
location15 = Location.create(city: 'Chicago', name: "Sakura Teppanyaki & Sushi", address: "730 West Diversey Parkway", details: "Two stalls available for use")
location16 = Location.create(city: 'Chicago', name: "Einstein Bagels", address: "2556 N. Clark", details: "No Directions Yet")





puts "Seeding reviews..."

review1 = Review.create(user_id: user1.id, location_id: location1.id, rating: 5, comments: "Not accessible to public, need to purchase something for code")
review2 = Review.create(user_id: user1.id, location_id: location4.id, rating: 8, comments: "Very clean and open for public use!")
review3 = Review.create(user_id: user1.id, location_id: location5.id, rating: 10, comments: "Glad they offer this without purchase")
review4 = Review.create(user_id: user1.id, location_id: location3.id, rating: 10, comments: "Signed a pledge to keep their restrooms a safe space for everyone- a purchase is not necessary")
review5 = Review.create(user_id: user1.id, location_id: location11.id, rating: 8, comments: "May sometimes require student ID but seems to be open regularly")
review6 = Review.create(user_id: user1.id, location_id: location15.id, rating: 10, comments: "My favorite nonjudgmental/high-quality healthcare clinic in Chicago")
review7 = Review.create(user_id: user1.id, location_id: location16.id, rating: 10, comments: "bathrooms are gender labeled but both single stall and staff will always inform you that you can use either one while waiting. New signs are coming to replace gendered signs!")
puts "done seeding"
