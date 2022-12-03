class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :location, :review, :menus, :reservations
end
