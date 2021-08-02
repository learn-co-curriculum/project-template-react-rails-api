class AppointmentsController < ApplicationController

    def create
        # user = User.find(session[:user_id])
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
        if session[:user_role] == "Patient"
            params.permit(:patient_id, :doctor_id, :time, :patient_intake_complete)
        elsif session[:user_role] == "Doctor"
            params.permit(:appointment_complete)
        end
    end
    
end

def destroy
    activity = Activity.find(params[:id])
    # byebug
    # activity.signups.destroy
    activity.destroy
    # activity.destroy, include: :signups
    # head :no_content
end