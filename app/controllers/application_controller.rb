class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :show_errors
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  private

  def show_errors(invalid)
    render json: {error:invalid}
  end

  def not_found(invalid)
    render json: {error: invalid}
  end

end
