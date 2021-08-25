class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :user_photo 
  has_many :events 
end
