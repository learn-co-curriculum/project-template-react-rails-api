class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cart_id, :total_price, :current_order, :drink_id, :bean_id

  belongs_to :user
end
