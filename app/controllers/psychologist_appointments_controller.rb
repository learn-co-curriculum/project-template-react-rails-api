class PsychologistAppointmentsController < ApplicationController

	def index
		appointments = PsychologistAppointment.all
		render json: appointments
	end

	def create
		appointment = PsychologistAppointment.create!(appointment_params)
		render json: appointment, status: :created
	  end
	
	  def show
		render json: @current_user
	  end

	  def destroy
		appointment = PsychologistAppointment.find(params[:id])
		appointment.destroy
		head :no_content
	  end 
	
	  private
	def appointment_params
		params.permit(:user_id, :psychologist_id, :startTime, :endTime, :subject)
	end 
end
