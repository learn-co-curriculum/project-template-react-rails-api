class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :favorite
end
