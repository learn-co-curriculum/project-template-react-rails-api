class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize, only: :create

  private

  def current_user
    @current_user = User.find_by_id(session[:user_id])
  end

  def authorize
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end
  
end
