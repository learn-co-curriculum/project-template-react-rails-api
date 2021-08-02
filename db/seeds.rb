
# clear old data
User.delete_all
Cart.delete_all
Bean.delete_all
Drink.delete_all
Order.delete_all



# create users
User.create(username: 'seanbalayan', password: '123456', password_confirmation: '123456', email_address: 'balayans2014@yahoo.com', address: '620 35th ave' )

10.times do 
    password = Faker::Alphanumeric.alpha(number: 10)

    User.create(username: Faker::Name.name, password: password , password_confirmation: password, email_address: Faker::Internet.email, address: Faker::Address.full_address)
end

# create cart
10.times do 
    user_id=User.ids.sample
    Cart.create(user_id: user_id)
end 

# create drinks
name = ['Latte', 'Cappuccino', 'Gibraltar','Espresso','Americano','Black','Breve','Machiatto']

milk = ['Whole','Oat','Almond','Skim','Half and Half','Soy','Heavy Cream']

sugar = [true,false]
iced = [true,false]
size = ['S','M','L','XL']
drink_price = [4, 5, 6, 7]

50.times do
    quantity = rand(1..10)
    Drink.create(name: name.sample, milk: milk.sample, sugar: sugar.sample, iced: iced.sample , size: size.sample , price: drink_price.sample, quantity: quantity, order_id: Order.find(drink_id= id))
end

# create beans
roast = ['Light', 'Medium', 'Dark']
bean_price = [15,18,19,20,25]

6.times do
    quantity = rand(1..10)
    Bean.create(name: Faker::Coffee.blend_name , variety: Faker::Coffee.variety , region: Faker::Coffee.origin, roast: roast.sample, price: bean_price.sample, quantity: quantity, notes: Faker::Coffee.notes )
end 

# create orders
20.times do
    drink_id = Drink.ids.sample
    bean_id = Bean.ids.sample
    
    drink_price = (Drink.find(drink_id).price * Drink.find(drink_id).quantity)

    bean_price = (Bean.find(bean_id).price * Bean.find(bean_id).quantity)


    Order.create(user_id: User.ids.sample, cart_id: Cart.ids.sample, drink_id: drink_id, bean_id: bean_id, total_price: (drink_price + bean_price))
end 

# puts `Done seeding`

