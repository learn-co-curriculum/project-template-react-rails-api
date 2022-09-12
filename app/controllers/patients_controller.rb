class PatientsController < ApplicationController
  skip_before_action :authenticate_patient

  def create
    patient = Patient.create!(patient_params)
    if patient.valid?
      session[:patient_id] ||= patient.id
      render json: patient, status: :created
    else
      render json: { errors: ["Not Authorized"] }, status: :unprocessable_entity
    end
  end

  private

  def patient_params
    params.permit(:username, :password, :password_confirmation, :full_name, :age, :address, :phone, :email)
  end
end
