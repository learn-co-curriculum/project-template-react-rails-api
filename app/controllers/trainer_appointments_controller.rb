class TrainerAppointmentsController < ApplicationController

	def index
		appointments = TrainerAppointment.all
		render json: appointments
	end

	def create
		appointment = TrainerAppointment.create!(appointment_params)
		render json: appointment, status: :created
	  end
	
	  def show
		render json: @current_user
	  end

	  def destroy
		appointment = TrainerAppointment.find(params[:id])
		appointment.destroy
		head :no_content
	  end 
	
	  private
	def appointment_params
		params.permit(:user_id, :trainer_id, :start_time, :end_time, :subject)
	end 
end
