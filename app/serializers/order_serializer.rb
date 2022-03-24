class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :user
  has_one :restaurant
end
