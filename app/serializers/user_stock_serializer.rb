class UserStockSerializer < ActiveModel::Serializer
  attributes :id, :name, :symbol, :price
  has_one :company
  has_one :user
end
