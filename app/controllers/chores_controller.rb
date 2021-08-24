class ChoresController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_errors
    wrap_parameters format: []

    def index
        chores = Chore.all 
        render json: chores, status: :ok
    end

    def create
        chore = Chore.create!(chore_params)
        render json: chore, status: :created
    end

    def destroy
        chore = Chore.find(params[:id])
        chore.destroy
        head :no_content
    end

    private

    def chore_params
        params.permit(:chore_name, :description, :min_age, :household_id)
    end

    def invalid_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
