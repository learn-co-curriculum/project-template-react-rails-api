puts 'rolling back data'
Appointment.destroy_all
User.destroy_all
Provider.destroy_all

puts 'seeding...'

locations = []
5.times do
  locations << 	Faker::Address.unique.full_address
end

times = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30']

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

specialties = ['Cardiology', 'Gastroenterology', 'Endocrinology', 'General Practice', 'Oncology','Gynaecology', 'Pediatrics', 'Neurology']

20.times do
	Provider.create(
		name: Faker::Name.unique.name_with_middle,
		specialty: specialties.sample,
		location: locations.sample		
	)
end

40.times do
	User.create(
		username: Faker::Internet.username,
		password: "123",
		password_confirmation: "123",
		full_name: Faker::Name.unique.name_with_middle, 
		age: Faker::Number.number(digits: 2), 
		address: Faker::Address.full_address, 
		phone: Faker::Number.number(digits: 7), 
		email: Faker::Internet.email,
		admin: false
	)
end

70.times do
	Appointment.create(
		time: times.sample, 
		day: days.sample,
		location: Provider.all.sample.location, 
		reason: Faker::Lorem.paragraph(sentence_count: 4), 
		provider_id: Provider.all.sample.id, 
		user_id: User.all.sample.id
	)
end

puts 'done!'
