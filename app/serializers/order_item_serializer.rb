class OrderItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :order
  has_one :menu_item
end
