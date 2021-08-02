class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cart_id, :drink_id, :bean_id, :total_price

  belongs_to :cart
  belongs_to :user
  belongs_to :bean
  belongs_to :drink
end
