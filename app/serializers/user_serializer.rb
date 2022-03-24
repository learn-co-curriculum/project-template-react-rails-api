class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :photo, :location, :age
end
