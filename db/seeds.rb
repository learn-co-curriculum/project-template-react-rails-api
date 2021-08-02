
# clear old data
User.delete_all
Cart.delete_all
Bean.delete_all
Drink.delete_all
Order.delete_all
OrderItem.delete_all


# create users
User.create(username: 'seanbalayan', password: '123456', password_confirmation: '123456', email_address: 'balayans2014@yahoo.com', address: '620 35th ave' )

10.times do 
    password = Faker::Alphanumeric.alpha(number: 10)

    User.create(username: Faker::Name.name, password: password , password_confirmation: password, email_address: Faker::Internet.email, address: Faker::Address.full_address)
end

# create cart
User.ids.map {|id| Cart.create(user_id: id)}

# create drinks

    Drink.create(name: 'Black Coffee', img_url: 'https://www.perfectbrew.com/wp-content/uploads/2021/06/how-to-make-black-coffee-taste-good-XS-1200x675.jpg', milk: 'Whole', sugar: false, iced: false , size: 'M', price: 5, quantity: 1, description:'Pour-over coffee served black (6-8oz)')

    Drink.create(name: 'Americano', img_url: 'https://images.squarespace-cdn.com/content/v1/5a7cbe247131a5f17b3cc8fc/1519447742018-MOHBW2G0VOQ7QSCPJE14/Americano-Coffee-Lounge-Ingredients.jpg',milk: 'Whole', sugar: false, iced: false , size: 'M', price: 5, quantity: 1, description:'Espresso and water (6oz)')

    Drink.create(name: 'Mocha', img_url: 'https://athome.starbucks.com/sites/default/files/2020-07/CaffeMocha_Header_Desktop_1176x712.jpg', milk: 'Whole', sugar: false, iced: false , size: 'M', price: 6, quantity: 1, description:'Latte with chocolate (6-8oz)')

    Drink.create(name: 'Latte', img_url: 'https://www.escoffieronline.com/wp-content/uploads/2013/12/a-guide-to-latte-art-_1107_524867_1_14094340_500.jpg', milk: 'Whole', sugar: false, iced: false , size: 'M', price: 5, quantity: 1, description:'Espresso with heavily-frothed milk (6-8oz)')

    Drink.create(name: 'Cappuccino', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cappuccino_Chiang_Mai.JPG/220px-Cappuccino_Chiang_Mai.JPG', milk: 'Whole', sugar: false, iced: false , size: 'S', price: 4, quantity: 1, description:'Espresso with heavily-frothed milk (4-6oz)')

    Drink.create(name: 'Flat White', img_url: 'https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/554793180/starbucks-flat-white.jpg?fit=1024%2C750&ssl=1', milk: 'Whole', sugar: false, iced: false , size: 'S', price: 4, quantity: 1, description:'Espresso with lightly-frothed milk (4-6oz)')

    Drink.create(name: 'Gibraltar', img_url: 'https://i.pinimg.com/236x/42/bb/ea/42bbea8ec8f8442ee5240464425f2233--espresso-coffee-best-coffee.jpg', milk: 'Whole', sugar: false, iced: false , size: 'S', price: 3, quantity: 1, description:'Espresso with lightly-frothed milk (4oz)')

    Drink.create(name: 'Machiatto', img_url: 'https://www.roastycoffee.com/wp-content/uploads/jeremy-yap-199222-unsplash.jpg',milk: 'Whole', sugar: false, iced: false , size: 'S', price: 3, quantity: 1, description:'Espresso with a dollop of warm milk (2oz)')

    Drink.create(name: 'Espresso', img_url: 'https://miro.medium.com/max/1200/1*4FzJWow3qJOV_O-3iKgBOw.jpeg', milk: 'Whole', sugar: false, iced: false , size: 'S', price: 2, quantity: 1, description:'1oz single or double shot')


# create beans
roast = ['Light', 'Medium', 'Dark']
bean_price = [15,18,19,20,25]

6.times do
    quantity = rand(1..10)
    Bean.create(name: Faker::Coffee.blend_name , variety: Faker::Coffee.variety , region: Faker::Coffee.origin, roast: roast.sample, price: bean_price.sample, quantity: quantity, notes: Faker::Coffee.notes )
end 

# create orders
20.times do
    bean_id = Bean.ids.sample
    drink_id = Drink.ids.sample
    user = User.ids.sample
    found_user = User.find(user)
    
    order = Order.create(user_id: user, cart_id: found_user.cart.id, current_order: false)

    OrderItem.create(order_id: order.id, item_id:bean_id, item_type: "Bean")

    OrderItem.create(order_id: order.id, item_id:drink_id, item_type: "Drink")
end 


# puts `Done seeding`

