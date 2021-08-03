class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :patient_intake_complete, :appointment_complete

  belongs_to :doctor, serializer: DoctorSerializer
  belongs_to :patient, serializer: PatientSerializer

  has_one :intake
end