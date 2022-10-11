class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :seller_id, :property_id
end
