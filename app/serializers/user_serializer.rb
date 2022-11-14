class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :workout, :meal
end
