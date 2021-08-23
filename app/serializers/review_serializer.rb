class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user
  has_one :dish
end
