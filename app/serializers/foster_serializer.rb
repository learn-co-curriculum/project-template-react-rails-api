class FosterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone
  has_many :pet_foster
  has_many :pet, through: :pet_foster
  has_many :meetup
end
