class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :restaurant_id, :price, :img, :type
end
