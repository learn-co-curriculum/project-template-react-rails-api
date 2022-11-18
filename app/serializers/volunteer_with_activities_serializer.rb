class VolunteerWithActivitiesSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age
  has_many :signups
  has_many :activities, through: :signups
end
