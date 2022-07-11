class BidSerializer < ActiveModel::Serializer
  attributes :id, :amount
  has_one :item
  has_one :user
end
