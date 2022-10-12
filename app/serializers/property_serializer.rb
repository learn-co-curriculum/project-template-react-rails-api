class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :address, :description, :price
end
