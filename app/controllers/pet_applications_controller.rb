class PetApplicationsController < ApplicationController

  # GET /pet_applications
  def index
    render json: PetApplication.all.order(:id)
  end

  # GET /pet_applications/:id
  def show
    render json: PetApplication.find(params[:id])
  end

  # PATCH /pet_applications/:id
  def update
    app = PetApplication.find(params[:id])
    app.update!(petapplicant_params)
    render json: app, status: :ok
  end

  # POST /pet_applications
  def create
    petapp = PetApplication.create!(petapplicant_params)
    render json: petapp, status: :created
  end

  # DELETE /pet_applications/:id
  def destroy
    petapp = PetApplication.find(params[:id])
    petapp.destroy!
    head :no_content
  end


  private 
  
  def petapplicant_params
    params.permit(:pet_id, :applicant_id, :status)
  end
    
end
