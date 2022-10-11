Admin.destroy_all
Buyer.destroy_all
Product.destroy_all
Review.destroy_all
Wishlist.destroy_all

puts "🎯 Seeding Admin data..."
# Admin
admin = Admin.create(username: "admin", email: "admin@sokoadmin.io")

puts "🎯 Seeding Buyer data..."
# Buyer
buyer_1 = Buyer.create(username: "luke", email: "luke@soko.io")

puts "🎯 Seeding Review data..."
# Review
review_1 = Review.create(comment: Faker::Lorem.sentence(word_count: 5, supplemental: true), rating: Faker::Number.within(range: 1..5))

puts "🎯 Seeding Wishlist data..."
# Wishlist
wishlist_1 = Wishlist.create(product_name: Faker::Commerce.product_name, buyer_id: buyer_1.id)

puts "🎯 Seeding Product data..."
# Product
Product.create(product_name: Faker::Commerce.product_name, 
    product_image_url: Faker::LoremFlickr.image, 
    product_description: Faker::Lorem.sentence(word_count: 12)
    quantity: Faker::Number.digit,
    price: Faker::Commerce.price
    subscribe: "Yes",
    admin_id: admin.id,
    buyer_id: buyer_1.id,
    review_id: review_1.id,
    wishlist_id: wishlist_1.id,
)

puts "🎯 Done seeding data"