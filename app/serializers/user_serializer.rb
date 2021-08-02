class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :email_address

  has_one :cart
  has_many :orders
  has_many :drinks, through: :orders
  has_many :beans, through: :orders
end
