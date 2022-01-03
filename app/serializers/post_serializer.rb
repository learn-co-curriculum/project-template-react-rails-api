class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :photos
  has_one :user
end
