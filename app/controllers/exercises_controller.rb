class ExercisesController < ApplicationController

    def create
        exercise = Exercise.create(exercise_params)
        if exercise.valid?
            render json: exercise, status: :created
        else
            render json: { errors: exercise.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        exercise.destroy
        head :no_content
    end

    private
    def exercise_params
        params.permit(:name, :duration, :calories_burnt, :user_id)
    end

end
