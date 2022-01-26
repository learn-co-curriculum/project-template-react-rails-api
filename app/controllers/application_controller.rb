class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :do_the_saving
  rescue_from ActiveRecord::RecordNotFound, with: :do_the_other_saving
  private
  def do_the_other_saving(invalid)
    render json: {error: invalid}, status: :not_found
  end
  def do_the_saving(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
