# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    user = User.create(username: "Charles", password: "FiendishFoe")
    seller = Seller.create(user_id: 1)
    item = Item.create(name: "a", httpimage:"ssfds0rtashfa")
    sale = Sale.create(seller_id: 1, item_id: 1, bid: 0, starting_bid: 25, bid_time: 5023020450249)
    print sale
    buyer = Buyer.create(item_id: 1, user_id: 1, sale_id: 1, buy_price: 4, buy_time: "")