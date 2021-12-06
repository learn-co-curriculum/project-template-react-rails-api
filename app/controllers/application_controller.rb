class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, "mochi") #the secret password
  end
  
  
  def auth_header #helper functin to check if request is an Authorized header
    request.headers['Authorization']
  end

  
  def decoded_token #If token passes, it's authenticated by JWT decoding auth
    if auth_header
      token = auth_header.split(' ')[1]
      begin
    
        JWT.decode(token, "mochi", true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

 
  def current_user #finds current user if token passes auth
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  
  def logged_in? 
    !!current_user
  end


  def authorized 
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

end
