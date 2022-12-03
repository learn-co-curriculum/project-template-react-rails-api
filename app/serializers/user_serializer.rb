class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password_digest
end
