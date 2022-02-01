class PetApplicationsController < ApplicationController

    # GET /petapplication
    def index
      render json: PetApplication.all
    end
  
    # GET /petapplication/:applicant_id
    def show
      render json: PetApplication.find_by(applicant_id: params[:id])
    end
  
    # POST /petapplication
    def create
      petapp = PetApplication.create!(petapplicant_params)
      render json: petapp, status: :created
    end
  
    # DELETE /petapplication/:id
    def destroy
      petapp = PetApplicatin.find(params[:id])
      petapp.destroy!
      head :no_content
    end
  
  
    private 
    
    def petapplicant_params
      params.permit(:pet_id, :applicant_id, :status)
    end
    
end
