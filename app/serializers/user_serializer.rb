class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :email_address
end
