class ProvidersController < ApplicationController
  # skip_before_action :authenticate_patient

  def index
    providers = Provider.all
    locations = Provider.pluck(:location).uniq
    patient_id = Patient.find_by(id: session[:patient_id]).id
    data = [providers, locations, patient_id]
    render json: data, status: :ok
  end

end
