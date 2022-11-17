Band.destroy_all
User.destroy_all
Venue.destroy_all
Concert.destroy_all


puts '🌙 Seeding bands...'
b1 = Band.create(name: "The Beatles", image_url: "https://images.radiox.co.uk/images/67203?crop=16_9&width=660&relax=1&signature=55LkrqcNZrAY4toJIVC2ULMZ_AU=", genre: "Rock n' Roll", secondary_genre: "Pop", hometown: "London")
b2 = Band.create(name: "The Doors", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/TheDoorsTheDoorsalbumcover.jpg/220px-TheDoorsTheDoorsalbumcover.jpg", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b3 = Band.create(name: "Guns n' Roses", image_url: "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b4 = Band.create(name: "Rolling Stones", image_url: "https://miro.medium.com/max/1200/1*MvKwnS9TUiLvM7-iqSZi6w.jpeg", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b5 = Band.create(name: "Bruce Springsteen & The E Street Band", image_url: "https://upload.wikimedia.org/wikipedia/en/7/77/BS%26ESB_Greatest_Hits.jpg", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "Asbury Park")

puts '🌙 Seeding users...'
u1 = User.create(username: "Nico123", email: "nico123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NY", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u2 = User.create(username: "Tyler123", email: "tyler123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u3 = User.create(username: "Sam123", email: "sam123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u4 = User.create(username: "Willa123", email: "willa123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "NJ", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")

puts '🌙 Seeding venues...'
v1 = Venue.create(city: "NYC", state: "NY", name: "The Roxy", logo_url: "link")
v2 = Venue.create(city: "NYC", state: "NY", name: "The Roxy", logo_url: "link")
v3 = Venue.create(city: "NYC", state: "NY", name: "The Roxy", logo_url: "link")
v4 = Venue.create(city: "NYC", state: "NY", name: "The Roxy", logo_url: "link")
v5 = Venue.create(city: "Asbury Park", state: "NJ", name: "The Stone Pony", logo_url: "link")

puts '🌙 Seeding concerts...'

c1 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.ticketweb.com", date: "2015-08-08".to_date, user_id: u1.id, venue_id: v1.id, band_id: b1.id)
c2 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-08".to_date, user_id: u2.id, venue_id: v2.id, band_id: b1.id)
c3 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.dice.fm", date: "2015-08-08".to_date, user_id: u3.id, venue_id: v3.id, band_id: b3.id)
c4 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-08".to_date, user_id: u4.id, venue_id: v4.id, band_id: b4.id)
c5 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-20".to_date, user_id: u3.id, venue_id: v4.id, band_id: b3.id)
c6 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-22".to_date, user_id: u3.id, venue_id: v4.id, band_id: b2.id)
c6 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2022-11-22".to_date, user_id: u1.id, venue_id: v5.id, band_id: b5.id)


puts '🌙 Done seeding!'
