class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :review
  has_one :dish
end
