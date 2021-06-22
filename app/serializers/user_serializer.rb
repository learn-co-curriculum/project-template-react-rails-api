class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :hobbies

  has_many :appointments
  has_many :trainers
  has_many :psychologists
  
end
