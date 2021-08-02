class PatientsController < ApplicationController

    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def upcoming_appointments
        upcoming_appointments = self.appointments.select { |appt| appt.appointment_complete == false }
        return upcoming_appointments
    end

end
