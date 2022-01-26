class BuyerSerializer < ActiveModel::Serializer
  attributes :item_id, :sale_id, :buy_price, :buy_time, :user_id, :id
end
