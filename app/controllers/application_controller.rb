class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  private

  def authorize 
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def current_user
    User.find_by(id:session[:user_id])
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found
    render json: { error: "Not Found" }, status: :not_found
  end

end
