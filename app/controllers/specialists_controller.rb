class SpecialistsController < ApplicationController
	def index
		specialists = Specialist.all 
		render json: specialists 
	end 

	def show
		specialist = Specialist.find_by(id: params[:id])
		if specialist
			render json: specialist
		else
			render json: { error: "Specialist not found" }, status: :not_found
		end 
	end 

	
end
