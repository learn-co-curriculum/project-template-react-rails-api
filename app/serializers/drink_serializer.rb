class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :milk, :sugar, :iced, :size, :price, :quantity

  has_many :orders
  has_many :users, through: :orders
end
