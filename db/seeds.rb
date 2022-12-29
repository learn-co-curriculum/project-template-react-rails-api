# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Comment.destroy_all
Post.destroy_all


puts'seeding begin✅'


u1 = User.create(username: "jennie", avatar: Faker::Avatar.image, email: "jennie@gmail.com", password_digest: "4444")
u2 = User.create(username: "reyes", avatar: Faker::Avatar.image, email: "reyes@yahoo.com", password_digest: "3333")
u3 = User.create(username: "gerry", avatar: Faker::Avatar.image, email: "gerry@aol.com", password_digest: "2222")
u4 = User.create(username: "lianzi", avatar: Faker::Avatar.image, email: "lianzi@gmail.com", password_digest: "1111")
u5 = User.create(username: "ryan", avatar: Faker::Avatar.image, email: "ryan@gmail.com", password_digest: "0000")


p1 = Post.create(image_url: "https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg", description: "Enjoying the fresh air, and the view from these hot-air balloons!!", tag: "Travel", user_id: u1.id)
p2 = Post.create(image_url: "https://www.greenqueen.com.hk/wp-content/uploads/2022/02/orijit-chatterjee-wEBg_pYtynw-unsplash-scaled.jpg", description: "Loving these very tasty noodles!!", tag: "Food",user_id: u4.id)
p3 = Post.create(image_url: "https://images.lifestyleasia.com/wp-content/uploads/2018/03/22161448/InstagramButlerHero.jpg", description: "Beautiful resort in the Maldives, loving the weather!!", tag: "Travel", user_id: u5.id)
p4 = Post.create(image_url: "https://cdn.hiconsumption.com/wp-content/uploads/2016/08/Best-Surf-Instagram-Accounts-01.jpg", description: "Surfing on some insanely big waves in Indonesia today ! 🤙🤙", tag: "Adventure" , user_id: u5.id)
p5 = Post.create(image_url: "https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2021/01/best-hiking-quotes.jpgw3.webp", description: "Experienced the best hike of my life with a very rewarding scenery 🖼", tag: "Adventure", user_id: u2.id)
p6 = Post.create(image_url: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/03/18181031/kerala.jpg", description: "The hotel on the water only cost you $100 a night.", tag: "Travel", user_id: u1.id)
p7 = Post.create(image_url: "https://skiaddict.co.uk/wp-content/uploads/2020/03/snow-cold-winter-white-skiing-season.jpg", description: "Enjoying my time skiing with my family and friends !!🙌", tag: "Winter", user_id: u2.id)
p8 = Post.create(image_url: "https://ca-times.brightspotcdn.com/dims4/default/9d0e8a1/2147483647/strip/true/crop/4276x2850+0+0/resize/1024x682!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F71%2Fda%2Fb2a60e6d4cf2999256438a1d94ed%2Faptopix-wcup-argentina-france-soccer-08454.jpg", description: "Huge win for Argentina against France to take the World Cup 2022 home !!⚽🙌", tag: "Sport", user_id: u3.id)
p9 = Post.create(image_url: "https://spoonuniversity.com/wp-content/uploads/sites/55/2016/01/FullSizeRender-4.jpg", description: "Come in! Streeeet food lover! Share the best food you ever had with us!", tag: "Food", user_id: u4.id)
p10 = Post.create(image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg", description: "My hedgehog loves the sunflower pool in this summer!", tag: "Pet", user_id: u2.id)


Comment.create(content: Faker::Quote.famous_last_words, user_id: u4.id, post_id: p1.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u5.id, post_id: p2.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u4.id, post_id: p3.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u5.id, post_id: p4.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u1.id, post_id: p5.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u1.id, post_id: p6.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u2.id, post_id: p7.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u2.id, post_id: p8.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u3.id, post_id: p9.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u3.id, post_id: p10.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u1.id, post_id: p10.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u2.id, post_id: p9.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u3.id, post_id: p8.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u4.id, post_id: p7.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u5.id, post_id: p6.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u5.id, post_id: p5.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u4.id, post_id: p4.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u3.id, post_id: p3.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u2.id, post_id: p2.id)
Comment.create(content: Faker::Quote.famous_last_words, user_id: u1.id, post_id: p1.id)


# 10.times do
#     User.create( username: Faker::Internet.username, avatar: Faker::Avatar.image, email: Faker::Internet.email, password_digest: "1234")
# end

# 10.times do
#     Post.create(image_url: Faker::LoremFlickr.image, description: Faker::Quote.famous_last_words)
# end

# all_users = User.all
# all_posts = Post.all
# 30.times do
#     Comment.create(content: Faker::Quote.famous_last_words, user_id: all_users.sample.id,  post_id:all_posts.sample.id)
# end


puts "seeding done✅"
