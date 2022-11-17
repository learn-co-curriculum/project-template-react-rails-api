class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email
  has_one :user
end
