class BeanSerializer < ActiveModel::Serializer
  attributes :id, :name, :variety, :region, :roast, :quantity, :price

  has_many :orders
  has_many :users, through: :orders
end
