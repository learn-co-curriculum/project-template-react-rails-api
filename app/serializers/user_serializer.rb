class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :avatar_url, :full_name, :address
end
