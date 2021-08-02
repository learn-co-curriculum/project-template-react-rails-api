class AppointmentsController < ApplicationController

    def create
        # user = User.find(session[:user_id])
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def appointment_params
        params.permit(:patient_id, :doctor_id, :time)
    end
    
end