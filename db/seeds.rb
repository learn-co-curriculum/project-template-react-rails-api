puts "🌱 Seeding Festival..."
festival = Festival.create(
    name: "Denver City Limits",
    date: "March 25, 2023",
    location: "Washington Park, Denver, Colorado, 80210"
)

puts "🌱 Seeding Artists..."
15.times do
    Artist.create(
    name: Faker::Music.band,
    bio: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4),
    genre: Faker::Music.genre,
    image: "https://loremflickr.com/450/250/band,music/all?random=#{rand(1..25)}",
    performance_time: "#{rand(12..22)}:00:00",
    stage: "Avalanche",
    festival_id: 1
    )
end
15.times do
    Artist.create(
    name: Faker::Music.band,
    bio: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4),
    genre: Faker::Music.genre,
    image: "https://loremflickr.com/450/250/band,music/all?random=#{rand(1..25)}",
    performance_time: "#{rand(12..22)}:00:00",
    stage: "Broncos",
    festival_id: 1
    )
end

10.times do
    Artist.create(
    name: Faker::Music.band,
    bio: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4),
    genre: Faker::Music.genre,
    image: "https://loremflickr.com/450/250/band,music/all?random=#{rand(1..25)}",
    performance_time: "#{rand(12..22)}:30:00",
    stage: "Rockies",
    festival_id: 1
    )
end

10.times do
    Artist.create(
    name: Faker::Music.band,
    bio: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4),
    genre: Faker::Music.genre,
    image: "https://loremflickr.com/450/250/band,music/all?random=#{rand(1..25)}",
    performance_time: "#{rand(12..22)}:30:00",
    stage: "Nuggets",
    festival_id: 1
    )
end

puts "👽 Done Seeding"