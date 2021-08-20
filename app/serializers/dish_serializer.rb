class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :price, :image_url, :restaurant_name, :city_name
end
