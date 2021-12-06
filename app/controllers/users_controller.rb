class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create, :index, :edit] 
   
      
    def index  
      users = User.all 
      render json: User.all.to_json({include: [:characters => {:include => [:character => {:include => [:character]}]}], except: [:created_at, :updated_at]})
    end 


    def create
      user = User.create(user_params)
      if user.valid?
        render json: { user: user, status: :created}
      else
        render json: { error: 'failed to create user', status: :not_acceptable}
      end
    end

    def edit 
      # byebug
      user = User.find(params[:id])
      user.update_attribute(:username, user_params[:username])
      user.update_attribute(:email, user_params[:email])
      render json: user
    end 

  private
    
    def user_params
      params.require(:user).permit(:username, :email, :password)
      # params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
    end


end 