class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cart_id, :current_order

  belongs_to :user
  has_many :order_items

  has_many :beans, through: :order_items, source: :item, source_type:"Bean"
  has_many :drinks, through: :order_items, source: :item, source_type:"Drink"
end
