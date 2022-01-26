class SalesSerializer < ActiveModel::Serializer
  attributes :id, :seller_id, :item_id, :bid, :starting_bid, :bid_time
end
