class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :address, :isRestaurant, :password_digest
end
