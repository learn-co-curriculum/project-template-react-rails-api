class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :milk, :sugar, :iced, :size, :price, :quantity, :description

  has_many :order_items, as: :item
  has_many :orders, through: :order_items, as: :item
end
