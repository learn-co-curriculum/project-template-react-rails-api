class ImageSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url
  has_one :user
end
