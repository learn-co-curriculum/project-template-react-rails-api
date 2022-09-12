class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :zipcode, :username, :password_digest
end
