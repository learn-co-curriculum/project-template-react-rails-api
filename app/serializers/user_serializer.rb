class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :user_photo
end
