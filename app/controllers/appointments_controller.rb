class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.where( patient_id: session[:patient_id] )
    render json: appointments, status: :ok
  end

  # def show
    
  # end

  # def create
  #   patient = Patient.find_by_id(session[:patient_id])
    
  #   appointment = Appointment.create!(appointment_params)

  # end

  private

  def appointment_params
    params.permit(:time, :location, :reason, :provider_id, :patient_id)
  end

end
