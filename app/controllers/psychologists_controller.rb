class PsychologistsController < ApplicationController

	def index
		psychologists = Psychologist.where(gender: params[:gender]) 
		render json: psychologists
	end 


	def show
		psychologist = Psychologist.find_by(id: params[:id])
		if psychologist
			render json: psychologist
		else
			render json: { error: "Psychologist not found" }, status: :not_found
		end 
	end 
end
