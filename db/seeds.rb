puts "Seeding..."

#employee seeds
20.times {Employee.create(
                          first_name: Faker::Name.first_name,
                          last_name: Faker::Name.last_name,
                          position: Faker::Job.title,
                          email: Faker::Internet.email,
                          password: Faker::Internet.password,
                          avatar: Faker::Avatar.image
)}

#manager seeds
10.times {Manager.create(
                         first_name: Faker::Name.first_name,
                         last_name: Faker::Name.last_name,
                         position: Faker::Job.title,
                         email: Faker::Internet.email,
                         password: Faker::Internet.password,
                         avatar: Faker::Avatar.image
)}

#project seeds
5.times {Project.create(
                        project_title: Faker::Marketing.buzzwords,
                        start_date: Faker::Date.between(from: '2022-01-01', to: '2022-07-01'),
                        end_date: Faker::Date.between(from: '2022-01-01', to: '2022-07-01'),
                        goal: Faker::Quote.famous_last_words,
                        manager_id: rand(1..10),
                        employee_id: rand(1..20)

)}

puts "Completed!"