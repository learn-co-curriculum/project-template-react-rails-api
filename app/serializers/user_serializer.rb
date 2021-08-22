class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_one :review
  has_one :dish
end
