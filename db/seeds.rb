Worker.destroy_all 
User.destroy_all 
Timeslot.destroy_all 
Service.destroy_all 
Appointment.destroy_all 
Customer.destroy_all 

#Customer
customer1 = Customer.create(name: 'Mike', location: 78704, budget: 200, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer2 = Customer.create(name: 'Joe', location: 78613, budget: 50, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer3 = Customer.create(name: 'Berry', location: 78617, budget: 250, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer4 = Customer.create(name: 'Ryan', location:  78634, budget: 312, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer5 = Customer.create(name: 'Shelly', location:  78653, budget: 500, description: "I need help", image_url: "https://www.pngfind.com/pngs/m/47-476083_free-png-download-angry-woman-animated-gif-png.png")
customer6 = Customer.create(name: 'Alvin', location:  78660, budget: 205, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer7 = Customer.create(name: 'Malvin', location: 78705, budget: 300, description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")
customer8 = Customer.create(name: 'Lauren', location:  78717, budget: 150,description: "I need help", image_url: "https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp")



#Worker
worker1 = Worker.create(name: 'Rob', location: 78704, earnings: 0, average_rating: 0, description: "I can fix anything", image_url: "https://us.123rf.com/450wm/rogistok/rogistok1709/rogistok170900006/85856043-male-superhero-plumber-with-a-wrench-hand-drawn-illustration-cartoon-pop-art-retro-vector-style.jpg?ver=6")
worker2 = Worker.create(name: 'ronald', location: 78660, earnings: 0, average_rating: 0, description: "I can fix anything", image_url: "https://us.123rf.com/450wm/rogistok/rogistok1709/rogistok170900006/85856043-male-superhero-plumber-with-a-wrench-hand-drawn-illustration-cartoon-pop-art-retro-vector-style.jpg?ver=6")
worker3 = Worker.create(name: 'Jack', location: 78660, earnings: 0, average_rating: 0, description: "I can fix anything", image_url: "https://us.123rf.com/450wm/rogistok/rogistok1709/rogistok170900006/85856043-male-superhero-plumber-with-a-wrench-hand-drawn-illustration-cartoon-pop-art-retro-vector-style.jpg?ver=6")
worker4 = Worker.create(name: 'Mary', location: 78653, earnings: 0, average_rating: 0, description: "I can fix anything", image_url: "https://us.123rf.com/450wm/rogistok/rogistok1709/rogistok170900006/85856043-male-superhero-plumber-with-a-wrench-hand-drawn-illustration-cartoon-pop-art-retro-vector-style.jpg?ver=6")
worker5 = Worker.create(name: 'Ben', location: 78717, earnings: 0, average_rating: 0, description: "I can fix anything", image_url: "https://us.123rf.com/450wm/rogistok/rogistok1709/rogistok170900006/85856043-male-superhero-plumber-with-a-wrench-hand-drawn-illustration-cartoon-pop-art-retro-vector-style.jpg?ver=6")

#Timeslot 
start_date = Date.today
end_date = start_date+7
days = (Date.parse(start_date.to_s)..Date.parse(end_date.to_s)).to_a
hours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5PM', '6 PM', '7 PM', '8 PM', '9 PM']
timeslots = days.map{|day| hours.map{|hour| "#{day} #{hour}"}.split('')}.flatten

timeslots.each do |timeslot|
    Timeslot.create(worker_id: worker1.id, date_time: timeslot)
end

#User 
user = User.create(user_id: worker1.id, user_type: "worker", username: "joyce", password_digest: 123)
user1 = User.create(user_id: worker2.id, user_type: "worker", username: "hadi", password_digest: 123)
user2 = User.create(user_id: worker3.id, user_type: "worker", username: "kevin", password_digest: 123)
user3 = User.create(user_id: worker4.id, user_type: "worker", username: "username1", password_digest: 123)
user4 = User.create(user_id: worker5.id, user_type: "worker", username: "username2", password_digest: 123)
user5 = User.create(user_id: customer1.id, user_type: "customer", username: "username3", password_digest: 123)
user6 = User.create(user_id: customer2.id, user_type: "customer", username: "username4", password_digest: 123)
user7 = User.create(user_id: customer3.id, user_type: "customer", username: "username5", password_digest: 123)
user8 = User.create(user_id: customer4.id, user_type: "customer", username: "username6", password_digest: 123)
user9 = User.create(user_id: customer5.id, user_type: "customer", username: "username7", password_digest: 123)
user10 = User.create(user_id: customer6.id, user_type: "customer", username: "username8", password_digest: 123)
user11 = User.create(user_id: customer7.id, user_type: "customer", username: "username9", password_digest: 123)
user12 = User.create(user_id: customer8.id, user_type: "customer", username: "username10", password_digest: 123)



#Service
yardwork = Service.create(worker_id: worker2.id, service: "yardwork", price: 150)
plumber = Service.create(worker_id: worker2.id, service: "plumber", price: 180)
carpenter = Service.create(worker_id: worker2.id, service: "carpenter", price: 200)
pestcontrol = Service.create(worker_id: worker2.id, service: "pestcontrol", price: 84)
appliance= Service.create(worker_id: worker2.id, service: "appliance", price: 300)

yardwork = Service.create(worker_id: worker1.id, service: "yardwork", price: 100)
plumber = Service.create(worker_id: worker1.id, service: "plumber", price: 50)
carpenter = Service.create(worker_id: worker1.id, service: "carpenter", price: 500)
pestcontrol = Service.create(worker_id: worker1.id, service: "pestcontrol", price: 79)
appliance= Service.create(worker_id: worker1.id, service: "appliance", price: 600)





#Appointment
Appointment.create(customer_id: customer1.id, worker_id: worker1.id, time: "2021-08-09 9 PM", total_cost: 150, services:["yardwork", "plumber"], status: "requested")
Appointment.create(customer_id: customer2.id, worker_id: worker2.id, time: "2021-08-09 8 PM", total_cost: 500, services:["appliance", "carpenter"], status: "confirmed")
Appointment.create(customer_id: customer3.id, worker_id: worker2.id, time: "2021-08-02 7 PM", total_cost: 264, services:["pestcontrol", "plumber"], status: "completed")




