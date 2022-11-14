class ReviewSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :workout
  has_one :meal
end
