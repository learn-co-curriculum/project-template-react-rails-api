class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :address, :description, :delivery_fee, :hours, :password_digest
end
