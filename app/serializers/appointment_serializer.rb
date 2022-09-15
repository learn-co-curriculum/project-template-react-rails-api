class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :day, :location, :reason
  has_one :provider
  has_one :patient
end
