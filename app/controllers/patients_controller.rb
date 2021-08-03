class PatientsController < ApplicationController

    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create(patient_params)
        if patient.valid?
            session[:role_id] = patient.id
            render json: user, status: :created
        else
            render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def patient_params
        params.permit(:first_name, :last_name)
    end

end
