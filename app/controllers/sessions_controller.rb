class SessionsController < ApplicationController
  skip_before_action :authenticate_patient, except: :destroy

  def create
    patient = Patient.find_by(username: params[:username])
    if patient&.authenticate(params[:password])
      session[:patient_id] = patient.id
      render json: patient, status: :created
    else
      render json: { errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

  def destroy
    if session[:patient_id]
      session.delete :patient_id
      head :no_content
    else
      render json: { errors: ["Not Authorized"]}, status: :unauthorized
    end
  end

end
