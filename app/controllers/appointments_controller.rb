class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.where( user_id: session[:user_id] )
    render json: appointments, status: :ok
  end

  def show
    appointment = Appointment.find_by( user_id: session[:user_id], id: params[:id] )
    render json: appointment, status: :ok
  end

  def create    
    appointment = Appointment.create!(appointment_params)
    render json: appointment, status: :created
  end

  def update
    appointment = Appointment.find_by( user_id: session[:user_id], id: params[:id] )
    appointment.update!(appointment_params)
    render json: appointment, status: :accepted
  end

  def destroy
    appointment = Appointment.find_by( user_id: session[:user_id], id: params[:id] )
    appointment.destroy
    head :no_content
  end

  private

  def appointment_params
    params.permit(:time, :location, :day, :reason, :provider_id, :user_id)
  end

end
