class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :location, :reason
  has_one :provider
  has_one :patient
end
