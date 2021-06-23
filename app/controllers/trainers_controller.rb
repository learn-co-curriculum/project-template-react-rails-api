class TrainersController < ApplicationController

	def index
		trainers = Trainer.where(gender: params[:gender], language: params[:language]) 
		render json: trainers
	end

	def show
		trainer = Trainer.find_by(id: params[:id])
		if trainer
			render json: trainer
		else
			render json: { error: "Trainer not found" }, status: :not_found
		end 
	end 
end
