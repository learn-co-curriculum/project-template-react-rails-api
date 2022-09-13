puts 'rolling back data'
Appointment.destroy_all
Patient.destroy_all
Provider.destroy_all

puts 'seeding...'

20.times do
	Provider.create(
		name: Faker::Name.unique.name_with_middle,
		specialty: Faker::Educator.subject,
		provider_avatar_url: "../headshot-placeholder-01.jpg"
	)
end

40.times do
	Patient.create(
		username: Faker::Internet.username,
		password: "123",
		password_confirmation: "123",
		full_name: Faker::Name.unique.name_with_middle, 
		age: Faker::Number.number(digits: 2), 
		address: Faker::Address.full_address, 
		phone: Faker::Number.number(digits: 7), 
		email: Faker::Internet.email,
		avatar_url: Faker::Avatar.image
	)
end

70.times do
	Appointment.create(
		time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :day), 
		location: Faker::Address.full_address, 
		reason: Faker::Lorem.paragraph(sentence_count: 4), 
		provider_id: Provider.all.sample.id, 
		patient_id: Patient.all.sample.id
	)
end


puts 'done!'
