class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
   
  has_one :avatar
end
