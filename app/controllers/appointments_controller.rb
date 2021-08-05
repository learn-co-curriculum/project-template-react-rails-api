class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments
    end

    def show
        appointment = Appointment.find(params[:id])
        render json: appointment
    end

    def create
        # user = User.find(session[:user_id])
        # byebug
        appointment = Appointment.create!(appointment_params)
        intake = Intake.create!(appointment_id: appointment.id)
        render json: appointment, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def update
        appointment = Appointment.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        # Use commented out line below for Postman testing
        # params.permit(:patient_id, :doctor_id, :time, :patient_intake_complete, :appointment_complete)
        user = User.find(session[:user_id])
        if user.role_type == "Patient"
            params.permit(:patient_id, :doctor_id, :time, :patient_intake_complete, :appointment_complete)
        elsif user.role_type == "Doctor"
            params.permit(:appointment_complete)
        end
    end
    
end