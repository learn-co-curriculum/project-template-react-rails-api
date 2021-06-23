# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## seed data for 10 therapist, unique_id: specialty  
#10 trainers 

Trainer.create!([
	{
	image_url: "https://www.clubshula.com/wp-content/uploads/2018/02/IMG_2637.jpg", 
	name: "Bob Davis", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "English",
	rating: "4.7", 
	specialty: "Trainer"
	},
	{
		image_url: "https://media.istockphoto.com/photos/muscular-trainer-writing-on-clipboard-picture-id675179390?k=6&m=675179390&s=612x612&w=0&h=WTagWqpLaDDXLjtOsro_gUx6I9F8XdBheU33Xx8OXTs=", 
		name: "Henry Bucky", 
		about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
		gender: "Male",
		language: "English",
		rating: "4.7", 
		specialty: "Trainer"
	},
   {
	image_url: "https://thumbs.dreamstime.com/b/female-swimming-instructor-cap-goggles-female-swimming-instructor-cap-goggles-posing-swimming-pool-154100334.jpg", 
	name: "Linda Scott", 
	about_me: "I am an excellent communicator. I'm a natural leader. As a hobby, I actually workout so work doesn't feel like work for me. I love my family",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://www.clubshula.com/wp-content/uploads/2018/02/IMG_2625.jpg", 
	name: "Jennifer Jordan", 
	about_me: "Family gal, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP-KmShOHd25c4-QXj961kbCDu-lP0cuvUA&usqp=CAU", 
	name: "Haifa Jean", 
	about_me: "I believe mindfulness in the workplace is key to success, a tenet I live out through my interests in yoga, meditation, gardening, and painting.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://media.self.com/photos/58a3585b9d6f39ff71b333ad/master/w_758,h_896,c_limit/Screen%20Shot%202017-02-14%20at%202.17.55%20PM.png", 
	name: "Liz Kotico", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Trainer"
},
{
	image_url: "https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_822/https://1qxya61uvyue18mpsx3zc8om-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2021/01/lyzabeth-lopez-latina-fitness.png", 
	name: "Amanda Spencer", 
	about_me: "I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000.",
	gender: "Female",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://www.pcyc.org.au/wp-content/uploads/2020/05/shaye.png", 
	name: "Duffny Son", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMevrHtNLTPnDrrl2xCq645QwWps7M4XIOkw&usqp=CAU", 
	name: "Marta Dennis", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg", 
	name: "Angela Mugeroba", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Female",
	language: "German", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://recreation.georgetown.edu/wp-content/uploads/sites/80/2019/02/christopher_pt.jpg", 
	name: "Tistra Lengerman", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Male",
	language: "German", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://www.clubshula.com/wp-content/uploads/2018/02/IMG_2644.jpg", 
	name: "Gerry Warden", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Male",
	language: "German", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://i.pinimg.com/originals/dc/38/ea/dc38eaf88de57efae42f02a2a2684835.jpg", 
	name: "James Ronaldo", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Male",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SP0tjpYaNSMklGJiuEacTd7sEdfabobxyA&usqp=CAU", 
	name: "Dustin Eduardo", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Male",
	language: "Italian", 
	rating: "4.4", 
	specialty: "Trainer"
},
{
	image_url: "https://www.theptdc.com/wp-content/uploads/2019/01/Profile_Feature.png", 
	name: "Linda Fernando", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/7af7118f-0710-4635-a99a-d16751105d87.jpg", 
	name: "Jenny Sterllo", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Female",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SP0tjpYaNSMklGJiuEacTd7sEdfabobxyA&usqp=CAU", 
	name: "John Michael", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Male",
	language: "Spanish", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://www.beachfitbondi.com.au/wp-content/uploads/2019/07/Sean-Syd1-min-768x862.png", 
	name: "Mike Castro", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "Spanish", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://media.self.com/photos/58b6db6b3adc2066deea4527/master/pass/tamara-pridgett-insta.jpg", 
	name: "Celia Stewart", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Psychologist"
},
{
	image_url: "https://themes.muffingroup.com/be/gym/wp-content/uploads/2015/04/home_gym_trailerbox_1.jpg", 
	name: "Dustin Eduardo", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "Italian", 
	rating: "4.4", 
	specialty: "Trainer"
},
{
	image_url: "https://www.essence.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-09-at-11.43.01-AM.png", 
	name: "Mary Dennis", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://www.riverwinds.org/vertical/Sites/%7B0460D846-0EF2-424D-A420-FD2DA420D0FE%7D/uploads/headshot.jpg", 
	name: "Angela Mugeroba", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Female",
	language: "French", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://lh3.googleusercontent.com/proxy/brjOgx4GKk27lxlSB3_gxTyOb6hul9YjNEdE45cZKD5Gfg6wpvt-ACAb7wO8FozXGlD3JQiiIHHSJzUizmvoABlLj3y0yaO_0n4q7v20TnlWCY3Lx0xV3O4PLKgEQ3GLmZAfqBYOpMW6GHWWgcj4zKbMtCtIGG9L6HSVhRyP", 
	name: "Desmond J. Hammer", 
	about_me: "I've always enjoyed writing and public speaking, even going back to high school. This led me to pursue writing-related passions, for example in college.",
	gender: "Male",
	language: "English", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/2020329/rs_600x600-200429181417-600_Kayla_Itsines_MP_4.29.20.jpg?fit=around%7C700:700&output-quality=90&crop=700:700;center,top", 
	name: "Jenni T. Victor", 
	about_me: "I've been in the therapy industry for over five years, primarily working in account and project management roles. I most recently worked as a senior PM.",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://wikitopx.com/wp-content/uploads/2020/04/Kayla_1585975103.jpg", 
	name: "Angela Warden", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Trainer"
},
{
	image_url: "https://lh3.googleusercontent.com/proxy/Thja8IA9ZBWw2-4c7yY-gQyVQsuHguV6BqrW_lLhzUuafKeOeGyYmQ1OcoCTmPLgD64Sj0nKpG6Oe-ev7_kgbQ3RxDu474MlXu93vQ4d3rp113oH1cY", 
	name: "Alex Rodriguz", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Male",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://www.clubshula.com/wp-content/uploads/2018/02/IMG_2672.jpg", 
	name: "Samuel Ovuel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	gender: "Male",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://ymcasouthflorida.org/wp-content/uploads/2020/12/JoeWoulf_500px.jpg", 
	name: "Oliver Tralerpj", 
	about_me: " I enjoy meeting new people and finding ways to help them have an uplifting experience. I have had a variety of customer service opportunities.",
	gender: "Male",
	language: "French", 
	rating: "4.7", 
	specialty: "Trainer"
},
{
	image_url: "https://guidedfitness-files.s3.amazonaws.com/uploads/smaller_Greg_Szots_960e8fc7fc.jpeg", 
	name: "Hermann Daniel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	gender: "Male",
	language: "German", 
	rating: "4.6", 
	specialty: "Trainer"
},
{
	image_url: "https://getfyt.s3.amazonaws.com/users_avatar/17902/2016-12-30t233009009182-IMG_2357.JPG", 
	name: "Luka Paulo", 
	about_me: "While I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited.",
	gender: "Male",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Trainer"
}
])


Psychologist.create!([
{
	image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/90/77/437790-1767342-2_320x400.jpg?pu=1583419300", 
	name: "Celia Stewart", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Psychologist"
},
{
	image_url: "https://linkedinriches.com/wp-content/uploads/2013/12/Nemo-Headshot-2.jpg", 
	name: "Dustin Eduardo", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "Italian", 
	rating: "4.4", 
	specialty: "Psychologist"
},
{
	image_url: "https://lh3.googleusercontent.com/proxy/1SZxWYEbI78gn1TKQbFH-0HvmgoFQdE06dubCZPHMJArpYfh6a7M3tKx0Fgj-JKfXz-OSZs9dM1AfokHKOT6M4IFOo8dB6MQ8do3DAi6H6bdU7na1XWj7ZM", 
	name: "Mary Dennis", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://i.pinimg.com/564x/ce/d8/4a/ced84a67302c60bd1abaaf9314064433.jpg", 
	name: "Angela Mugeroba", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Female",
	language: "French", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/13/66/396613-1233969-2_320x400.jpg?pu=1527390069", 
	name: "Desmond J. Hammer", 
	about_me: "I've always enjoyed writing and public speaking, even going back to high school. This led me to pursue writing-related passions, for example in college.",
	gender: "Male",
	language: "English", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArTiVlQkKxQFNLAekAieEp1MA7fSvpULMZg&usqp=CAU", 
	name: "Jenni T. Victor", 
	about_me: "I've been in the therapy industry for over five years, primarily working in account and project management roles. I most recently worked as a senior PM.",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://www.capitolstandard.com/wp-content/uploads/2020/08/jake-nackos-career-change-pivot-woman-professional.jpg", 
	name: "Angela Warden", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoWOW146B9NIcaHPGpaewCPvOVCJ4SY5nUA&usqp=CAU", 
	name: "Alex Rodriguz", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Male",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "http://img-cdn.tid.al/o/18dbd99c8f8166cb175c39506e15aa643856f4f0.jpg", 
	name: "Samuel Ovuel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	gender: "Male",
	language: "French", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNrYTmdm78yRL2kgSvEUUxjfqSVwEKgbEXg&usqp=CAU", 
	name: "Oliver Tralerpj", 
	about_me: " I enjoy meeting new people and finding ways to help them have an uplifting experience. I have had a variety of customer service opportunities.",
	gender: "Male",
	language: "French", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoWOW146B9NIcaHPGpaewCPvOVCJ4SY5nUA&usqp=CAU", 
	name: "Hermann Daniel", 
	about_me: "I've learned I work best on products that I love and use, and given that I'm a big user of your company’s products I jumped at the chance to apply.",
	gender: "Male",
	language: "German", 
	rating: "4.6", 
	specialty: "Psychologist"
},
{
	image_url: "https://www.headshots-london.co.uk/wp-content/uploads/2017/03/headshots-for-linkedin.jpg", 
	name: "Luka Paulo", 
	about_me: "While I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited.",
	gender: "Male",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Sami-Viitama%CC%88ki-.jpeg", 
	name: "Bob Davis", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "English",
	rating: "4.7", 
	specialty: "Psychologist"
	},
	{
		image_url: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg", 
		name: "Henry Bucky", 
		about_me: "I am an excellent communicator. I'm a natural leader. As a hobby, I actually workout so work doesn't feel like work for me. I love my family",
		gender: "Male",
		language: "English",
		rating: "4.7", 
		specialty: "Psychologist"
	},
   {
	image_url: "https://ca-times.brightspotcdn.com/dims4/default/a6b960e/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F32%2Fc1%2F866d57e7f57d6826e59eb828308e%2Fla-1554934338-zcd3lywn89-snap-image", 
	name: "Linda Scott", 
	about_me: "I am an excellent communicator. I'm a natural leader. As a hobby, I actually workout so work doesn't feel like work for me. I love my family",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://media.vanityfair.com/photos/598de53ef2e2e548d62a02cd/1:1/w_960,h_960,c_limit/gypsy-netflix-canceled.jpg", 
	name: "Jennifer Jordan", 
	about_me: "Family gal, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Female",
	language: "English", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "http://cdn0.sussexdirectories.com/rms/rms_photos/sized/41/24/832441-2081339-3_320x400.jpg?pu=1612384234", 
	name: "Haifa Jean", 
	about_me: "I believe mindfulness in the workplace is key to success, a tenet I live out through my interests in yoga, meditation, gardening, and painting.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Trainer"
},
{
	image_url: "https://d33ljpvc0tflz5.cloudfront.net/dims3/MMH/70dd8c1/2147483647/strip/true/crop/6720x4375+0+53/resize/768x500!/quality/75/?url=https%3A%2F%2Fd26ua9paks4zq.cloudfront.net%2F91%2F79%2F3fe0e82a486ebde7ff33b3a599aa%2Fgettyimages-668440484.jpg", 
	name: "Liz Kotico", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Spanish", 
	rating: "4.9", 
	specialty: "Psychologist"
},
{
	image_url: "https://img.freepik.com/free-photo/portrait-smiling-female-psychologist-her-office_23-2148026254.jpg?size=626&ext=jpg", 
	name: "Amanda Spencer", 
	about_me: "I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000.",
	gender: "Female",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://images.squarespace-cdn.com/content/v1/5bf5ede78f513002f87f6e0a/1554170069249-N6Z5CMLV55XL55JATT0V/ke17ZwdGBToddI8pDm48kI6-y_iZUR5sTOnZapal3gR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQ3HgakMfJftIboRqVyOOADVOpf_gLG6hOScZvjdu_2-YCNktvz-O8E62ZORL8IqRg/Photo+of+Alpana+Choudhury%2C+founder+of+Wove+Therapist?format=1500w", 
	name: "Duffny Thompson", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "Spanish", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://media.allure.com/photos/5da895257b1d1300086d1730/16:9/w_2560%2Cc_limit/therapy.jpg", 
	name: "Marta Dennis", 
	about_me: "I find honesty, creativity and dedication to be the most valuable qualities for success in running a company. In the 18 years since founding Emerald & Gold.",
	gender: "Female",
	language: "French", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://www.sussmancounseling.com/images/rachel_sussman.png", 
	name: "Angela Mugeroba", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Female",
	language: "German", 
	rating: "4.7", 
	specialty: "Psychologist"
},
{
	image_url: "https://i.pinimg.com/originals/7d/ea/2d/7dea2dbab4e77fc02764f092599fd10c.jpg", 
	name: "Tistra Lengerman", 
	about_me: "After switching to a product marketing role and managing the two most successful new product launches last year, I'm excited.",
	gender: "Male",
	language: "German", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://beedie.sfu.ca/sms/admin/_DocLibrary/_cvs/21621-PIC-M._Parent_June_2013.jpeg", 
	name: "Gerry Warden", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Male",
	language: "German", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/44/52/115244-1329502-2_320x400.jpg?pu=1539009220", 
	name: "James Ronaldo", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Male",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://img.freepik.com/free-photo/smiling-asian-man-using-tablet-computer_1262-18324.jpg?size=626&ext=jpg&ga=GA1.1.1983713001.1615852800", 
	name: "Dustin Eduardo", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Male",
	language: "Italian", 
	rating: "4.4", 
	specialty: "Psychologist"
},
{
	image_url: "http://www.marriagecounseling-longisland.com/wp-content/uploads/2010/02/Diane56-copy-13.jpg", 
	name: "Linda Fernando", 
	about_me: "Fueled by my passion for understanding the nuances of cross-cultural advertising. I consider myself a ‘forever student,’ eager to build clients",
	gender: "Female",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://post.psychcentral.com/wp-content/uploads/sites/4/2021/04/smiling-female-psychologist-couch-732x549-thumbnail.jpg", 
	name: "Jenny Sterllo", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Female",
	language: "Italian", 
	rating: "4.8", 
	specialty: "Psychologist"
},
{
	image_url: "https://ethnicelebs.com/wp-content/uploads/2018/04/IHA-043852-Henry-Golding.jpg", 
	name: "John Michael", 
	about_me: "After college, I took a job at Acme as a social media manager, writing copy and social content for the company blog, but I raised my hand.",
	gender: "Male",
	language: "Spanish", 
	rating: "4.5", 
	specialty: "Psychologist"
},
{
	image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg", 
	name: "Mike Castro", 
	about_me: "Family guy, I am passionate about my work. I am ambitious and driven. When you don't see me at the gym, I am at the park with my two twins",
	gender: "Male",
	language: "Spanish", 
	rating: "4.8", 
	specialty: "Psychologist"
},
])