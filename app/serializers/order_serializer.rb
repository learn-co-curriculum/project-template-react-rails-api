class OrderSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :menu_id, :price
end
