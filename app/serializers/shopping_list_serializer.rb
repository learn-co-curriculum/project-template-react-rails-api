class ShoppingListSerializer < ActiveModel::Serializer
  # attributes :id, :user_id, :name
  attributes :id, :name, :user_id
  has_many :shopping_list_items
end
