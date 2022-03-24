class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :item_type
  has_one :menu
  has_one :restaurant
end
