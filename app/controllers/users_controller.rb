class UsersController < ApplicationController
    wrap_parameters format: [:json, :xml, :url_encoded_form, :multipart_form]
    def index
        render json: User.all
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end
  
    def create
        
        user = User.create!(user_params)
        # session[:user_id] = user.id
        render json: user
    end
    private

    def user_params
        params.permit( :name, :username, :email, :password)
        
    end
end
