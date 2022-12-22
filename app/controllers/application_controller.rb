class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  private

  def render_not_found_response error
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
  def render_invalid_response invalid
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end
end
