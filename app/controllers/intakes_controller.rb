class IntakesController < ApplicationController

    def index
        intakes = Intake.all
        render json: intakes
    end

    def show
        intake = Intake.find(params[:id])
        render json: intake
    end

    def update
        intake = Intake.find(params[:id])
        intake.update!(intake_params)
        render json: intake
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def intake_params
        # Use commented out line below for Postman testing
        # params.permit(:onset, :location, :duration, :characteristics, :aggravating_factors, :relieving_factors, :timing_and_severity, :blood_pressure, :bmi, :weight, :height, :temperature, :pulse, :oxygen_saturation, :bsa, :doctor_notes)
        if session[:user_role] == "Patient"
        params.permit(:onset, :location, :duration, :characteristics, :aggravating_factors, :relieving_factors, :timing_and_severity, :reason_for_visit)
        elsif session[:user_role] == "Doctor"
        params.permit(:blood_pressure, :bmi, :weight, :height, :temperature, :pulse, :oxygen_saturation, :bsa, :doctor_notes)   
        end         
    end

end