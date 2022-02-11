class PetFostersController < ApplicationController

  # GET /petfosters
  def index
    render json: PetFoster.all.order(:id)
  end

  # GET /petfosters/:id
  def show
    petfoster = find_petfoster
    render json: petfoster
  end

  # PATCH /petfosters/:id
  def update
    petfoster = find_petfoster
    petfoster.update!(petfoster_params)
    render json: petfoster, status: :ok
  end

  # POST /petfosters
  def create
    petfoster = PetFoster.create!(petfoster_params)
    render json: petfoster, status: :created
  end

  # DELETE /petfosters/:id
  def destroy
    petfoster = find_petfoster
    petfoster.destroy!
    head :no_content
  end

  private

  def petfoster_params
    params.permit(:pet_id, :foster_id, :active)
  end

  def find_petfoster
    PetFoster.find(params[:id])
  end

end
