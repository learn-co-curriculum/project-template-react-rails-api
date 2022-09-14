class PatientsController < ApplicationController
  skip_before_action :authenticate_patient

  def create
    patient = Patient.create!(patient_params)
    if patient.valid?
      session[:patient_id] = patient.id
      render json: patient, status: :created
    else
      render json: { errors: ["Not Authorized"] }, status: :unprocessable_entity
    end
  end

  def show
    patient = Patient.find_by(id: session[:patient_id])
    
      if session[:patient_id]
        render json: patient, status: :ok
      else
        render json: {errors: ["Not Authorized"] }, status: :unauthorized
      end
  end

  private

  def patient_params
    params.permit(:username, :password, :password_confirmation, :full_name, :age, :address, :phone, :email)
  end
end
