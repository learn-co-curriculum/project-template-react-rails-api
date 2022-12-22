class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :email, :password_digest
end
