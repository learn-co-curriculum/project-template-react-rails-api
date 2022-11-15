Band.destroy_all
User.destroy_all
Venue.destroy_all
Concert.destroy_all


puts '🌙 Seeding bands...'
b1 = Band.create(name: "The Beatles", image_url: "link", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b2 = Band.create(name: "The Doors", image_url: "link", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b3 = Band.create(name: "Guns n Roses", image_url: "link", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")
b4 = Band.create(name: "Rolling Stones", image_url: "link", genre: "Rock 'n Roll", secondary_genre: "Pop", hometown: "London")

puts '🌙 Seeding users...'
u1 = User.create(username: "Nico123", email: "nico123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "New Jersey", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u2 = User.create(username: "Tyler123", email: "tyler123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "New Jersey", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u3 = User.create(username: "Sam123", email: "sam123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "New Jersey", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")
u4 = User.create(username: "Willa123", email: "willa123@gmail.com", password:"password", first_name: "Nico", last_name: "123", favorite_band: "The Beatles", location: "New Jersey", genre_1: "Pop", genre_2: "Rock", genre_3: "n Roll")

puts '🌙 Seeding venues...'
v1 = Venue.create(city: "NYC", name: "The Roxy", logo_url: "link")
v2 = Venue.create(city: "NYC", name: "The Roxy", logo_url: "link")
v3 = Venue.create(city: "NYC", name: "The Roxy", logo_url: "link")
v4 = Venue.create(city: "NYC", name: "The Roxy", logo_url: "link")

puts '🌙 Seeding concerts...'
c1 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.ticketweb.com", date: "2015-08-08", user_id: u1.id, venue_id: v1.id, band_id: b1.id)
c2 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-08", user_id: u2.id, venue_id: v2.id, band_id: b2.id)
c3 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.dice.fm", date: "2015-08-08", user_id: u3.id, venue_id: v3.id, band_id: b3.id)
c4 = Concert.create(comment: "NA", tickets_remaining: 5, link: "http://www.eventbrite.com", date: "2015-08-08", user_id: u4.id, venue_id: v4.id, band_id: b4.id)

puts '🌙 Done seeding!'
