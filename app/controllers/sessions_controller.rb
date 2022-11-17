class SessionsController < ApplicationController
  def password=(new_password)
    salt = BCrypt::Engine.generate_salt
    self.password_digest = BCrypt::Engine.hash_secret(new_password, salt)
  end

  def authenticate(password)
    salt = password_digest[0..28]
    unless BCrypt::Engine.hash_secret(password, salt) == self.password_digest
      return nil
    end
    self
  end

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {
               errors: ["Invalid username or password"]
             },
             status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
