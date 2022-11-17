Band.destroy_all
User.destroy_all
Venue.destroy_all
Concert.destroy_all


puts '🌙 Seeding bands...'
b1 = Band.create(name: "Guns n Roses", image_url: "https://www.udiscovermusic.com/wp-content/uploads/2020/03/Guns-N-Roses-GettyImages-1201731181-1000x600.jpg", genre: "Rock", secondary_genre: "Classic Rock", hometown: "London")
b2 = Band.create(name: "The Rolling Stones", image_url: "https://cdn.britannica.com/41/197341-050-4859B808/The-Rolling-Stones-Bill-Wyman-Keith-Richards-1964.jpg", genre: "Rock", secondary_genre: "Classic Rock", hometown: "London, UK")
b3 = Band.create(name: "Bruce Springsteen & The E Street Band", image_url: "https://teachrock.org/wp-content/uploads/estreet.jpg", genre: "Rock", secondary_genre: "Classic Rock", hometown: "Asbury Park, NJ")
b4 = Band.create(name: "Wet Leg", image_url: "https://www.rollingstone.com/wp-content/uploads/2022/10/PC-Hollie-Fernando-Wet-Leg-2-300-dpi.jpg", genre: "Alternative", secondary_genre: "Indie", hometown: "Isle of Wight, UK")
b5 = Band.create(name: "Circa Survive", image_url: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-6333-rectangle.jpg", genre: "Alternative", secondary_genre: "Post-hardcore", hometown: "Philadelphia, PA")
b6 = Band.create(name: "The Mountain Goats", image_url: "https://www.rollingstone.com/wp-content/uploads/2020/09/themountaingoats_final_img_2921_jadewilson.jpg", genre: "Alternative", secondary_genre: "Indie", hometown: "Durham, NC")
b7 = Band.create(name: "Phoebe Bridgers", image_url: "https://i.scdn.co/image/ab6761610000e5eb626686e362d30246e816cc5b", genre: "Indie", secondary_genre: "Folk", hometown: "Los Angeles, CA")
b8 = Band.create(name: "Lizzo", image_url: "https://variety.com/wp-content/uploads/2022/11/Lizzo-Photo-Credit-AB-DM.png?w=681&h=383&crop=1", genre: "Pop", secondary_genre: "Hip-hop", hometown: "Detroit, MI")
b9 = Band.create(name: "Run the Jewels", image_url: "https://i.ytimg.com/vi/phKlr4_bsEw/maxresdefault.jpg", genre: "Rap", secondary_genre: "Hip-hop", hometown: "Atlanta, GA")
b10 = Band.create(name: "Kingfish Ingram", image_url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Kingfish_by_Rory_Doyle.jpg", genre: "Rock", secondary_genre: "R&B", hometown: "Clarksdale, MS")
b11 = Band.create(name: "Big Freedia", image_url: "https://media.npr.org/assets/img/2018/10/25/hsieh_angela_music_turntables_bigfreedia_wide-fa14fc99d23081bf12c9c9e5acca0ebf6482ad8b-s1100-c50.jpg", genre: "Rap", secondary_genre: "Hip-hop", hometown: "New Orleans, LA")
b12 = Band.create(name: "CHIKA", image_url: "https://api.time.com/wp-content/uploads/2019/04/chika-rapper-interview.jpg", genre: "Hip-hop", secondary_genre: "R&B", hometown: "Montgomery, AL")
b13 = Band.create(name: "Tai Verdes", image_url: "https://www.rollingstone.com/wp-content/uploads/2020/07/tai-verdes.jpg", genre: "Pop", secondary_genre: "R&B", hometown: "Los Angeles, CA")
b14 = Band.create(name: "Kid Quill", image_url: "https://res.cloudinary.com/dn29xlaeh/image/upload/v1602278337/beatgig-updated/dkwxgu1s06fk0rzzwzfa.jpg", genre: "Hip-hop", secondary_genre: "Rap", hometown: "Shelbyville, IN")
b15 = Band.create(name: "Stormzy", image_url: "https://i.scdn.co/image/ab67616d00001e02a1e8b73748ee972a4c22be16", genre: "Rap", secondary_genre: "Hip-hop", hometown: "London, UK")
b16 = Band.create(name: "Peach PRC", image_url: "https://pbs.twimg.com/profile_images/1547115019652894721/HUz2giUr_400x400.jpg", genre: "Pop", secondary_genre: "Hip-hop", hometown: "Adelaide, South Australia")
b17 = Band.create(name: "Latto", image_url: "https://www.biglatto.com/assets/img/promo-music.jpg", genre: "Rap", secondary_genre: "Hip-hop", hometown: "Columbus, OH")
b18 = Band.create(name: "Megan Thee Stallion", image_url: "https://www.essence.com/wp-content/uploads/2021/08/4x5-Meg_004-Cropped-1200x900.jpg", genre: "Pop", secondary_genre: "Hip-hop", hometown: "San Antonio, TX")
b19 = Band.create(name: "Noah Kahan", image_url: "https://i.scdn.co/image/ab6761610000e5eb709c2e83bd48fea626ace6a2", genre: "Pop", secondary_genre: "Alternative", hometown: "Strafford, VT")
b20 = Band.create(name: "Ludacris", image_url: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/raiders/kmtmbm0ujixuzseyj4hj", genre: "Rap", secondary_genre: "Hip-hop", hometown: "Champaign, IL")
b21 = Band.create(name: "Khruangbin", image_url: "https://i.scdn.co/image/ab6761610000e5ebd7f94cc01272646f12243037", genre: "Rock", secondary_genre: "Funk", hometown: "Houston, TX")
b22 = Band.create(name: "The Misfits", image_url: "https://www.punknews.org/images/bands/themisfits-1655839461.jpg", genre: "Punk", secondary_genre: "Rock", hometown: "Lodi, NJ")
b23 = Band.create(name: "Rancid", image_url: "https://i.scdn.co/image/ab6761610000e5ebbd16b85349a1bb490d547441", genre: "Rock", secondary_genre: "Punk", hometown: "Berkeley, CA")
b24 = Band.create(name: "Every Time I Die", image_url: "https://townsquare.media/site/838/files/2021/12/attachment-every-time-i-die.jpeg", genre: "Alternative", secondary_genre: "Hardcore", hometown: "Buffalo, NY")
b25 = Band.create(name: "Titus Andronicus", image_url: "https://media.pitchfork.com/photos/62d627570eba15d86484cb53/2:1/w_2560%2Cc_limit/titus-andronicus.jpg", genre: "Punk", secondary_genre: "Alternative", hometown: "Glen Rock, NJ")
b26 = Band.create(name: "Wilco", image_url: "https://media.pitchfork.com/photos/5d80dd606eee70000829fa53/1:1/w_2880,h_2880,c_limit/Wilco.jpg", genre: "Indie", secondary_genre: "Folk", hometown: "Chicago, IL")
b27 = Band.create(name: "Taylor Swift", image_url: "https://parade.com/.image/t_share/MTkzMTQ1ODk2OTI0MzU4MjI0/taylor-swift-net-worth-2022.jpg", genre: "Pop", secondary_genre: "Folk", hometown: "West Reading, PA")
b28 = Band.create(name: "Blink-182", image_url: "https://media.pitchfork.com/photos/63481f4e96b294a782f0ef35/2:1/w_2560%2Cc_limit/Blink-182.jpg", genre: "Rock", secondary_genre: "Pop Punk", hometown: "Poway, CA")
b29 = Band.create(name: "Paramore", image_url: "https://www.billboard.com/wp-content/uploads/2022/07/paramore-2022-press-cr-elke-billboard-1548.jpg", genre: "Alternative", secondary_genre: "Pop Punk", hometown: "Franklin, TN")
b30 = Band.create(name: "Japanese Breakfast", image_url: "https://www.nme.com/wp-content/uploads/2022/04/Japanese-Breakfast_JF_7534.jpg", genre: "Alternative", secondary_genre: "Indie", hometown: "Eugene, OR")

puts '🌙 Seeding users...'
u1 = User.create(username: "Nico123", email: "nico123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NY", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u2 = User.create(username: "Tyler123", email: "tyler123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u3 = User.create(username: "Sam123", email: "sam123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u4 = User.create(username: "Willa123", email: "willa123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")

puts '🌙 Seeding venues...'
v1 = Venue.create(city: "Brooklyn", state: "NY", name: "Music Hall of Williamsburg", logo_url: "https://d3nxoulyw7bc8u.cloudfront.net/images/venue/None/4ae7eb04-9068-4be8-b266-ed0debe8e750.jpg")
v2 = Venue.create(city: "Brooklyn", state: "NY", name: "The Bell House", logo_url: "https://pyxis.nymag.com/v1/imgs/add/8b5/f68a9aa49a710ce5ff3c7841ad1449d607-the-bellhouse-01.rsocial.w1200.jpg")
v3 = Venue.create(city: "NYC", state: "NY", name: "Bowery Ballroom", logo_url: "https://dgm-cover.azureedge.net/1080/gc33.jpg")
v4 = Venue.create(city: "Brooklyn", state: "NY", name: "Brooklyn Bowl", logo_url: "https://i.ticketweb.com//i/venue/131624_Venue.jpg")
v5 = Venue.create(city: "Asbury Park", state: "NJ", name: "The Stone Pony", logo_url: "https://www.gannett-cdn.com/presto/2019/01/18/PAPP/c389d18d-f945-49de-aa37-9b4206669ae7-ASBURYPARK0710G.jpg")
v6 = Venue.create(city: "Asbury Park", state: "NJ", name: "Asbury Lanes", logo_url: "https://images.getbento.com/accounts/c9bae090b94f1c0b71c6b7d6d6c26b52/media/1jsvDlIMRb2MaqVTWhvW_Asbury_Lanes_08d_V2%20copy.jpg?w=1200&fit=crop&auto=compress,format&h=600")
v7 = Venue.create(city: "Newark", state: "NJ", name: "Prudential Center", logo_url: "https://assets.prucenter.com/event-main/bags.jpg")
v8 = Venue.create(city: "Jersey City", state: "NJ", name: "White Eagle Hall", logo_url: "https://static.wixstatic.com/media/0f5115_594c10a7a0b74a89a108eab09fd04cad~mv2.png/v1/fill/w_1872,h_1100,al_c/0f5115_594c10a7a0b74a89a108eab09fd04cad~mv2.png")
v9 = Venue.create(city: "Boston", state: "MA", name: "Paradise Rock Club", logo_url: "https://phishsonian.files.wordpress.com/2015/02/6884147610_d84b5fe3c9.jpg")
v10 = Venue.create(city: "Chicago", state: "IL", name: "The Hideout", logo_url: "https://www.indieonthemove.com/resize/hideout_8992.jpg")
v11 = Venue.create(city: "LA", state: "CA", name: "The Roxy", logo_url: "https://venue-media.eventup.com/resized/venue/the-roxy-theatre-aeg-presents/b227.1920x1080.jpg")
v12 = Venue.create(city: "LA", state: "CA", name: "The Troubadour", logo_url: "https://www.visitwesthollywood.com/wp-content/uploads/2018/09/Troubadour-scaled.jpg")
v13 = Venue.create(city: "LA", state: "CA", name: "Hollywood Bowl", logo_url: "https://ucarecdn.com/8ae9952d-6848-4d2a-9b5b-69c5578c2e9d/")
v14 = Venue.create(city: "Philadelphia", state: "PA", name: "Union Transfer", logo_url: "https://www.visitphilly.com/wp-content/uploads/2018/02/Union-Transfer-stage-G.Miller-VP-2200x1237.jpg")
v15 = Venue.create(city: "Philadelphia", state: "PA", name: "Franklin Music Hall", logo_url: "https://www.visitphilly.com/wp-content/uploads/2017/12/crtsy-electric-factory-crowd-900VP.jpg")
v16 = Venue.create(city: "Austin", state: "TX", name: "Mohawk", logo_url: "https://lostinaustin.org/wp-content/uploads/2019/02/mohawk-03-1024x683.jpg")
v17 = Venue.create(city: "Austin", state: "TX", name: "The Continental Club", logo_url: "https://images.squarespace-cdn.com/content/v1/5458172de4b010408a819b69/1457053262678-TZI9ZWSVC3L7VVUJAZM9/Continental+Club+front.png?format=2500w")
v18 = Venue.create(city: "Morrison", state: "CO", name: "Red Rocks Ampitheatre", logo_url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/aa/59/2c.jpg")

puts '🌙 Seeding concerts...'

c1 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.ticketweb.com", date: "2015-08-08".to_datetime, user_id: u1.id, venue_id: v1.id, band_id: b1.id)
c2 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-09".to_datetime, user_id: u2.id, venue_id: v2.id, band_id: b3.id)
c3 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.dice.fm", date: "2015-08-08".to_datetime, user_id: u3.id, venue_id: v4.id, band_id: b5.id)
c4 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-08".to_datetime, user_id: u3.id, venue_id: v3.id, band_id: b30.id)
c5 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-20".to_datetime, user_id: u4.id, venue_id: v5.id, band_id: b28.id)
c6 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-22".to_datetime, user_id: u2.id, venue_id: v8.id, band_id: b17.id)
c7 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-22".to_datetime, user_id: u2.id, venue_id: v9.id, band_id: b10.id)

puts '🌙 Done seeding!'
