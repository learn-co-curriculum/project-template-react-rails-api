class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :order
  has_one :MenuItem
end
