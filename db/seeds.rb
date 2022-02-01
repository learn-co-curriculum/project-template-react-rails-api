# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
f1 = Foster.create()
f2 = Foster.create()
f3 = Foster.create()

puts "♥ Fosters created!"

# pets
p1 = Pet.create()
p2 = Pet.create()
p3 = Pet.create()
p4 = Pet.create()

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