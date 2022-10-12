class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :address, :description, :price

  belongs_to :seller
  belongs_to :user
end
