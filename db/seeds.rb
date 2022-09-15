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

# Artist.create(
#     name: "J. Cole" ,
#     bio: 'Jermaine Lamarr Cole is an American rapper, singer, songwriter, and record producer. He is regarded as one of the most influential rappers of his generation.',
#     genre: 'Hip-Hop',
#     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQ7SQ40l_zbDoX5UPYDbJ3lIkyw_8CSsYyw&usqp=CAU",
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: "Rockies",
#     festival_id: 1)
# Artist.create(
#     name: 'Kaskade' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Zeds Dead' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Ganja White Night' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'A$AP Rocky' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Mike Jones' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Bad Bunny' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Calvin Harris' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Deorro' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Disclosure' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Dom Dolla' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Flume' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Jauz' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Snoop Dogg' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Tame Impala' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'JoJi' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Kayzo' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Kid Cudi' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Lil Wayne' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Miguel' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Oliver Heldens' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'Post Malone' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Red Hot Chili Peppers' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'ScHoolboy Q' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'Skrillex' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: 'The Weeknd' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: 'ZHU' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)
# Artist.create(
#     name: '' ,
#     bio: ''
#     genre: '',
#     image: ''
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1,)
# Artist.create(
#     name: '' ,
#     bio: '',
#     genre: '',
#     image: '',
#     performance_time: "#{rand(12..22)}:30:00",
#     stage: " ",
#     festival_id: 1)

puts "👽 Done Seeding"