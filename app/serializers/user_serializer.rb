class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :score
   
  has_one :avatar
end
