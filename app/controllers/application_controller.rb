class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_patient

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  private

  def render_not_found(not_found)
    render json: {error: "#{not_found.model} not found"}, status: :not_found
  end

  def render_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def current_patient
    @current_patient ||= Patient.find_by_id(session[:patient_id])
  end

  def authenticate_patient
    render json: { errors: {Patient: "not Authorized"}}, status: :unauthorized unless current_patient
end

end
