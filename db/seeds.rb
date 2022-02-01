const { faker } = require('@faker-js/faker');

puts "Destroying existing data...."
Foster.destroy_all
Pet.destroy_all
PetFoster.destroy_all
Meetup.destroy_all
Applicant.destroy_all
PetApplication.destroy_all
Admin.destroy_all

puts "♥♥♥♥♥♥♥ Getting ready to seed ♥♥♥♥♥♥♥"

# fosters
f1 = Foster.create(
  first_name: "Katie",
  last_name: "Foster",
  email: "kfoster@email.com", 
  phone: Faker::PhoneNumber.cell_phone
)
f2 = Foster.create(
  first_name: "Henry",
  last_name: "Cavill",
  email: "hcavill@email.com", 
  phone: Faker::PhoneNumber.cell_phone
)
f3 = Foster.create(
  first_name: "Ariana",
  last_name: "Venti",
  email: "aventi@email.com", 
  phone: Faker::PhoneNumber.cell_phone
)

puts "♥ Fosters created!"

# pets
p1 = Pet.create(
  name: "Sis", 
  status: "Available", 
  species: "Dog", 
  breed: "Shepherd/Husky Mix", 
  age: "1-2 years old", 
  height: 22, 
  weight: 44, 
  fixed: true, 
  energy_level: "high", 
  coat_type: "double-coated", 
  good_w_kids: true, 
  good_w_cats: false 
  behavioral_issues: false, 
  description: "This lovely girl would be a great companion for a work-at-home owner who enjoys taking breaks for walks during the day. She has great house manners and loves her toys. She needs more practice in social skills with other dogs, so is recommended as a single dog at present.", 
  rabies_vaccine: "3YR given on 11/3/2021", 
  FVRCP_vaccine: "", 
  distemper_parvo_vaccine: "3YR given on 11/3/2021", 
  dewormed: true
)

p2 = Pet.create(
  name: "Koda", 
  status: "Available", 
  species: "Cat", 
  breed: "Tuxedo Shorthair", 
  age: "1", 
  height: 8, 
  weight: 9, 
  fixed: false, 
  energy_level: "low-medium", 
  coat_type: "Short", 
  good_w_kids: true, 
  good_w_cats: true, 
  behavioral_issues: false, 
  description: "Koda is a handsome tuxedo cat who is curious and enjoys watching the birds and cars going by, and meeting new people. The laser light and flopping fish are becoming his favorite toys. He loves his cuddle and adventure time equally. He is getting rave reviews from his foster home!", 
  rabies_vaccine: "3YR given on 7/25/2021", 
  FVRCP_vaccine: "1YR given on 7/25/2021", 
  distemper_parvo_vaccine: "", 
  dewormed: true
)

p3 = Pet.create(
  name: "Spice", 
  status: "Available", 
  species: "Cat", 
  breed: "Domestic Shorthair", 
  age: "3", 
  height: 9, 
  weight: 10, 
  fixed: false, 
  energy_level: "low", 
  coat_type: "short", 
  good_w_kids: true, 
  good_w_cats: true, 
  behavioral_issues: false, 
  description: "This gentle kitty was left behind because his family was not able to care for him. He would be a quiet roommate for someone who likes a cat comfortable spending time on his own. He will let you know when it is time for breakfast and dinner, but other than that he is content to nap. He is not a jumper and likes to find quiet places to hang out. He has been diagnosed with feline asthma but has been successful with medication", 
  rabies_vaccine: "1YR given on 12/11/2021", 
  FVRCP_vaccine: "1YR given on 12/11/2021", 
  distemper_parvo_vaccine: "", 
  dewormed: true
)

p4 = Pet.create(
  name: "Lucy", 
  status: "Available", 
  species: "Dog", 
  breed: "Husky mix", 
  age: "2-3 years old", 
  height: 22, 
  weight: 50, 
  fixed: false, 
  energy_level: "medium-high", 
  coat_type: "double-coated", 
  good_w_kids: true, 
  good_w_cats: true, 
  behavioral_issues: false, 
  description: "Sweet, blue-eyed Lucy has spent most of her life up to this point in subpar conditions. She’s now learning about a new life — going for walks, rides in the car, cuddles on the couch — what companionship can look like instead of isolation!", 
  rabies_vaccine: "3YR given on 1/22/2022", 
  FVRCP_vaccine: "", 
  distemper_parvo_vaccine: "3YR given on 1/22/2022", 
  dewormed: true
)

puts "♥ Pets created!"

# pet_fosters
pf1 = PetFoster.create()
pf2 = PetFoster.create()
pf3 = PetFoster.create()
pf4 = PetFoster.create()

puts "♥ Pet_fosters created!"

# meetups
m1 = Meetup.create()

puts "♥ Meetups created!"

# applicants
a1 = Applicant.create()
a2 = Applicant.create()

puts "♥ Applicants created!"

# pet_applications
pa1 = PetApplication.create()
pa2 = PetApplication.create()

puts "♥ Pet_applications created!"

# admins
Admin.create(first_name: "Seen", last_name: "So", email: "seen@email.com")

puts "♥ Admins created!"

puts "♥♥♥♥♥♥♥ DONE SEEDING! ♥♥♥♥♥♥♥"