class UserStockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :performance_over_time, :sector
  has_one :company
  has_one :user
end
