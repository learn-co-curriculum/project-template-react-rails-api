class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :email_address

  has_one :cart
  has_many :orders
end
