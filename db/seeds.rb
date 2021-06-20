# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## seed data for 10 therapist, unique_id: specialty  
#10 trainers 

Specialist.create!([
	{
	image_url: "https://www.clubshula.com/wp-content/uploads/2018/02/IMG_2637.jpg", 
	name: "Bob Davis", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	language: "English",
	rating: "4.7", 
	specialty: "Trainer"
	},
   {
	image_url: "https://thumbs.dreamstime.com/b/female-swimming-instructor-cap-goggles-female-swimming-instructor-cap-goggles-posing-swimming-pool-154100334.jpg", 
	name: "Linda Scott", 
	about_me: "I am an excellent communicator. I'm a natural leader. As a hobby, I actually workout so work doesn't feel like work for me. I love my family",
	language: "English", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/90/77/437790-1767342-2_320x400.jpg?pu=1583419300", 
	name: "Celia Stewart", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Psychologist"
},
{
	image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/13/66/396613-1233969-2_320x400.jpg?pu=1527390069", 
	name: "Desmond J. Hammer", 
	about_me: "I've always enjoyed writing and public speaking, even going back to high school. This led me to pursue writing-related passions, for example in college.",
	language: "English", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArTiVlQkKxQFNLAekAieEp1MA7fSvpULMZg&usqp=CAU", 
	name: "Jenni T. Victor", 
	about_me: "I've been in the therapy industry for over five years, primarily working in account and project management roles. I most recently worked as a senior PM.",
	language: "English", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP-KmShOHd25c4-QXj961kbCDu-lP0cuvUA&usqp=CAU", 
	name: "Haifa Jean", 
	about_me: "I believe mindfulness in the workplace is key to success, a tenet I live out through my interests in yoga, meditation, gardening, and painting.",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoWOW146B9NIcaHPGpaewCPvOVCJ4SY5nUA&usqp=CAU", 
	name: "Alex Rodriguz", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://media.self.com/photos/58a3585b9d6f39ff71b333ad/master/w_758,h_896,c_limit/Screen%20Shot%202017-02-14%20at%202.17.55%20PM.png", 
	name: "Liz Kotico", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Trainer"
},
{
	image_url: "https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_822/https://1qxya61uvyue18mpsx3zc8om-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2021/01/lyzabeth-lopez-latina-fitness.png", 
	name: "Amanda Spencer", 
	about_me: "I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000.",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://explorehealthcareers.org/wp-content/uploads/2016/11/psychologist.jpg", 
	name: "Susan Ovuel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	language: "French", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNrYTmdm78yRL2kgSvEUUxjfqSVwEKgbEXg&usqp=CAU", 
	name: "Oliver Tralerpj", 
	about_me: " I enjoy meeting new people and finding ways to help them have an uplifting experience. I have had a variety of customer service opportunities.",
	language: "French", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMevrHtNLTPnDrrl2xCq645QwWps7M4XIOkw&usqp=CAU", 
	name: "Marta Dennis", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoWOW146B9NIcaHPGpaewCPvOVCJ4SY5nUA&usqp=CAU", 
	name: "Hermann Daniel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	language: "German", 
	rating: "4.6", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzqEETWvaoYiP8MLsLG2tF0yeNOQDn-BxQw&usqp=CAU", 
	name: "Angela Mugeroba", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	language: "German", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGoArw3tx7SkMqV62Eb7gFtMs_KyZ1Mgj_g&usqp=CAU", 
	name: "Luka Paulo", 
	about_me: "While I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited.",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SP0tjpYaNSMklGJiuEacTd7sEdfabobxyA&usqp=CAU", 
	name: "Corrado Roberto", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Trainer"
}
])