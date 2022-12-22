class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :description
end
