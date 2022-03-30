class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :address, :password_digest
end
