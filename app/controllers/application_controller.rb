class ApplicationController < ActionController::API
  include ActionController::Cookies

  private 

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def check_restaurant
    current_user = User.find_by(id:session[:user_id])
    unless current_user.isRestaurant
        redirect_to '/', :alert => "Don't have permission!"
    end
  end

end
