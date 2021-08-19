class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest, :user_photo
end
