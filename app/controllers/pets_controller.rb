class PetsController < ApplicationController

  # GET /pets
  def index
    render json: Pet.all.order(:id)
  end

  # GET /pets/:id
  def show
    pet = find_pet
    render json: pet
  end

  # PATCH /pets/:id
  def update
    pet = find_pet
    pet.update!(pet_params)
    render json: pet, status: :ok
  end

  # POST /pets
  def create
    pet = Pet.create!(pet_params)
    render json: pet, status: :created
  end

  # DELETE /pets/:id
  def destroy
    pet = find_pet
    pet.destroy!
    head :no_content
  end

  private

  def pet_params
    params.permit(:name, :status, :image, :species, :breed, :age, :height, :weight, :fixed, :energy_level, :coat_type, :good_w_kids, :good_w_cats, :behavioral_issues, :description, :rabies_vaccine, :FVRCP_vaccine, :distemper_parvo_vaccine, :dewormed)
  end

  def find_pet
    Pet.find(params[:id])
  end
end
