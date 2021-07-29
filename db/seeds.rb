# create users
User.delete_all

User.create(username: 'seanbalayan', password: '123456', password_confirmation: '123456', email_address: 'balayans2014@yahoo.com', address: '620 35th ave' )

10.times do 
    password = Faker::Alphanumeric.alpha(number: 10)

    User.create(username: Faker::Name.name, password: password , password_confirmation: password, email_address: Faker::Internet.email, address: Faker::Address.full_address)
end