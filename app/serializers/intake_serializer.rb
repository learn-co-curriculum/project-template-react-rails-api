class IntakeSerializer < ActiveModel::Serializer
  attributes :id, :onset, :location, :duration, :characteristics, :aggravating_factors, :relieving_factors, :timing_and_severity, :blood_pressure, :bmi, :weight, :height, :temperature, :pulse, :oxygen_saturation, :bsa, :doctor_notes, :reason_for_visit

  belongs_to :appointment
end
