class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :address, :description, :delivery_fee, :hours, :image_url, :password_digest
  has_many :menu_items
end
