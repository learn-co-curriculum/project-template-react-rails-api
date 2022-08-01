class ApplicationController < ActionController::API
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  include ActionController::Cookies

  before_action :authorize

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private

  def authorize
    unless session.include? :user_id
      return render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def record_not_found(exception)
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def record_invalid(exception)
    render json: {
             errors: exception.record.errors.full_messages
           },
           status: :unprocessable_entity
  end
end
