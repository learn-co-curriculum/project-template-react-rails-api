class ProfilesController < ApplicationController
    
    def index
      render json: Profile.all, status: :ok
    end
  
    def create
      profile = Profile.new(profile_params)
      #profile.user = @current_user
    
      if profile.save
        render json: profile, status: :created
      else
        render json: { errors: profile.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
  
    def update
      if @current_user.profile.update(profile_params)
        render json: @current_user.profile, status: :ok
      else
        render json: { errors: @current_user.profile.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      if @current_user.profile.destroy
        render json: { message: "Profile deleted successfully" }, status: :ok
      else
        render json: { errors: @current_user.profile.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    private
  
    def profile_params
      params.permit(:name, :email, :bio, :address,:image, :contacts)
    end

  
end