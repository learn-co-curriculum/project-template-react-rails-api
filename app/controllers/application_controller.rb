class ApplicationController < ActionController::API
  include ActionController::Cookies

  private 

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def logged_in_restaurant
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :restaurant_id
  end

end
