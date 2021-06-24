class ProfilesController < ApplicationController

	def index
		profile = Profile.all
		render json: profile
	end 

	def show
		profile = Profile.find_by(id: params[:id])
		if profile
			render json: profile
		else
			render json: { error: "Profile not found" }, status: :not_found
		end 
	end 

	def create
		profile = Profile.create!(profile_params)
		render json: profile, status: :created
	end 

	# def update
	# 	profile = Profile.find(params[:id])
	# 	if profile 
	# 		profile.update(profile_params)
	# 		render json: profile
	# 	else
	# 		render json: { error: "Profile not found" }, status: :not_found
	# 	end 
	# end 

	def destroy 
		profile = Profile.find(params[:id])
		profile.destroy
		head :no_content
	end

	private 

	def profile_params
		params.permit(:weight, :desired_weight, :bmi, :exercise, :therapy, :user_id)
	end 

end
