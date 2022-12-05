class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :review, :menus, :reservations
end
