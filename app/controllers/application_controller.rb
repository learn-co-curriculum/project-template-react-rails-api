class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authorize
  
  private
  
  def authorize 
     render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  end
  
  def render_unprocessable_entity(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
