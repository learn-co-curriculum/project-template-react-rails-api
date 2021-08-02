class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :item_id, :item_type

  belongs_to :order
  belongs_to :item, polymorphic: true
end
