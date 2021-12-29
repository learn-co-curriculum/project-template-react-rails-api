class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comments
  has_one :user
  has_one :location
end
