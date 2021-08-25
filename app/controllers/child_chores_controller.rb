class ChildChoresController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    wrap_parameters format: []

    def show
        child_chores = ChildChore.where(user_id: params[:id])
        render json: child_chores, include: :chore, status: :ok
    end

    def create
        child_chore = ChildChore.create!(child_chore_params)
        render json: child_chore, status: :created
    end

    def update
        child_chore = ChildChore.find(params[:id])
        child_chore.update(is_completed: params[:is_completed])
        render json: child_chore, status: :accepted
    end

    def destroy
        child_chore = ChildChore.find(params[:id])
        child_chore.destroy
        head :no_content
    end

    private

    def child_chore_params
        params.permit(:user_id, :chore_id, :reward, :time_to_complete, :is_completed)
    end

    def invalid_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
        render json: {errors: ["Chores not found"]}, status: :not_found
    end

end
