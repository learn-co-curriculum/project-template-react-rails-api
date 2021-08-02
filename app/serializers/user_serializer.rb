class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :email_address

  has_one :cart
  has_many :orders
  has_many :order_items, through: :orders
end
