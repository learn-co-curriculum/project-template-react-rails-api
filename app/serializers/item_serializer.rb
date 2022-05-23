class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :quantity, :total_cost
  belongs_to :shopping_list_items
end
