class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :plant_posts
  has_many :reviews
end
