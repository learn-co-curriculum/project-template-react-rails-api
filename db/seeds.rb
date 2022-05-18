puts 'Seeding starting'


puts 'seeding user'

User.create!(name: 'Kevawn', username:'kev', password: "password")

puts 'seeding items'

10.times do 
 Item.create!(name: Faker::Food.fruits, image:Faker::Food.description, price: 0)
end

puts 'seeding shopping list'

ShoppingList.create!(user_id: 1, name: 'baking')
ShoppingList.create!(user_id: 1, name: 'cooking')

puts 'seeding shopping list item'

ShoppingListItem.create!(item_id: 1, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 2, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 3, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 4, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 5, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 6, shopping_list_id: 1)
ShoppingListItem.create!(item_id: 7, shopping_list_id: 2)
ShoppingListItem.create!(item_id: 8, shopping_list_id: 2)
ShoppingListItem.create!(item_id: 9, shopping_list_id: 2)
ShoppingListItem.create!(item_id: 10, shopping_list_id: 2)

puts 'seeding completed'