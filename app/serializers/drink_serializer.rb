class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :milk, :sugar, :iced, :size, :price, :quantity, :description

  has_many :orders
  has_many :users, through: :orders
end
