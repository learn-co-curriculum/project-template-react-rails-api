class LandlordsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::InvalidRecord, with: :render_unprocessable_entity_response

    # GET/landlords
    def index
        landlords = Landlord.all
        render json: landlords, status: :ok
    end

    # GET/landlords/:id
    def show
        landlord = find_landlord
        render json: landlord, status: :ok
    end

    # POST/landlords
    def create
        landlord = Landlord.create!(landlord_params)
        render json: landlord, status: :created
    end

    # PATCH/landlords/:id
    def update
        landlord = find_landlord
        landlord.update!(landlord_params)
        render json: landlord, status: :created
    end

    # DELETE/landlords
    def destroy
        landlord = find_landlord
        landlord.destroy
        head :no_content
    end

    private

    def render_not_found_response
        render json: {errors: [error: "Landlord not found"]}, status: :not_found
    end

    def render_unprocessable_entity_response(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable entity
    end

    def landlord_params
        params.permit(:name, :email, :password, :password_confirmation, :bio)
    end

    def find_landlord
        landlord = Landlord.find_by(id: params[:id])
    end

end
