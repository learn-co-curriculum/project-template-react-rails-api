class FostersController < ApplicationController
  
    # GET /fosters
    def index
      render json: Foster.all.order(:id)
    end
  
    # GET /fosters/:id
    def show
      foster = find_foster
      render json: foster
    end
  
    # PATCH /fosters/:id
    def update
      foster = find_foster
      foster.update!(foster_params)
      render json: foster, status: :ok
    end
  
    # POST /fosters
    def create
      foster = Foster.create!(foster_params)
      render json: foster, status: :created
    end
  
    # DELETE /fosters/:id
    def destroy
      foster = find_foster
      foster.destroy!
      head :no_content
    end
  
    private
  
    def foster_params
      params.permit(:first_name, :last_name, :email, :phone)
    end
  
    def find_foster
      Foster.find(params[:id])
    end
end
