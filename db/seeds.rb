# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## seed data for 10 therapist, unique_id: specialty  
#10 trainers 

bob = Specialist.create(image_url: "https://www.shutterstock.com/image-photo/portrait-muscular-trainer-writing-on-clipboard-296585468", name: "Bob", about_me: "strong",language: "english",rating: 4.7, specialty: "trainer")
linda = Specialist.create(image_url: "https://thumbs.dreamstime.com/b/female-swimming-instructor-cap-goggles-female-swimming-instructor-cap-goggles-posing-swimming-pool-154100334.jpg", name: "Linda", about_me: "personal",language: "english", rating: 4.0, specialty: "psychologist")
celia = Specialist.create(image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/90/77/437790-1767342-2_320x400.jpg?pu=1583419300", name: "Celia", about_me: "warm",language: "spanish", rating: 4.9, specialty: "psychologist")
desmond = Specialist.create(image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/13/66/396613-1233969-2_320x400.jpg?pu=1527390069", name: "Desmond", about_me: "wise",language: "english", rating: 4.4, specialty: "psychologist")
jenni = Specialist.create(image_url: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArTiVlQkKxQFNLAekAieEp1MA7fSvpULMZg&usqp=CAU", name: "Jenni", about_me: "inspiring",language: "english", rating: 4.0, specialty: "psychologistt")
haifa = Specialist.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP-KmShOHd25c4-QXj961kbCDu-lP0cuvUA&usqp=CAU", name: "Haifa", about_me: "loving",language: "french", rating: 4.0, specialty: "trainer")
alex= Specialist.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoWOW146B9NIcaHPGpaewCPvOVCJ4SY5nUA&usqp=CAU", name: "Alex", about_me: "calm",language: "spanish", rating: 4.0, specialty: "psychologist ")
liz = Specialist.create(image_url: "https://media.self.com/photos/58a3585b9d6f39ff71b333ad/master/w_758,h_896,c_limit/Screen%20Shot%202017-02-14%20at%202.17.55%20PM.png", name: "Liz", about_me: "personal",language: "spanish", rating: 4.9, specialty: "trainer")
amanda = Specialist.create(image_url: "https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_822/https://1qxya61uvyue18mpsx3zc8om-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2021/01/lyzabeth-lopez-latina-fitness.png", name: "Amanda", about_me: "personal",language: "spanish", rating: 4.7, specialty: "trainer")
haifa = Specialist.create(image_url: "https://explorehealthcareers.org/wp-content/uploads/2016/11/psychologist.jpg", name: "Susan", about_me: "Caring",language: "french", rating: 4.0, specialty: "psychologist") 