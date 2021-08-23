class ChildChoresController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    wrap_parameters format: []

    # def show
    #     user = User.find(params[:user_id])
    #     render json: user, include: {only: :child_chores, include: :chore}, status: :ok
    # end

    def create
        child_chore = ChildChore.create!(child_chore_params)
        render json: child_chore, status: :created
    end

    private

    def child_chore_params
        params.permit(:user_id, :chore_id, :reward, :time_to_complete, :is_completed)
    end

    def invalid_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
        render json: {error: "Chores not found"}, status: :not_found
    end

end
