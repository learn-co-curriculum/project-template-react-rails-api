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

puts 'done!'
