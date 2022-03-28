class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :picture, :name, :github, :linkedin, :blog
end
