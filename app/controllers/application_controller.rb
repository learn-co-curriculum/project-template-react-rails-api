class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_422
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  private

  def render_422(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

  def render_404(err)
    render json: { errors: err }, status: 404
  end

end
