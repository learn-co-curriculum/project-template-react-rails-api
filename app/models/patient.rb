class Patient < ApplicationRecord
    has_one :user, as: :role

    has_many :appointments
    has_many :doctors, through: :appointments

    def upcoming_appointments
        upcoming_appointments = self.appointments.select { |appt| appt.appointment_complete == false }
        return upcoming_appointments
    end

end
