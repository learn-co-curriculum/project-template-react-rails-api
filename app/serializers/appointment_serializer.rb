class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time

  belongs_to :doctor, serializer: DoctorSerializer
  belongs_to :patient, serializer: PatientSerializer
end