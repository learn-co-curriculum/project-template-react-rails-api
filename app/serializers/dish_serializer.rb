class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :price, :image_url, :street_name, :city_name
end
