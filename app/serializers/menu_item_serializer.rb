class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url, :description, :item_type
  has_one :menu
  has_one :restaurant
end
