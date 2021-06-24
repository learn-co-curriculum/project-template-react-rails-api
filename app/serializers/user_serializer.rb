class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :hobbies

  has_many :psychologist_appointments
  has_many :trainer_appointments
  has_many :trainers
  has_many :psychologists
  
end
