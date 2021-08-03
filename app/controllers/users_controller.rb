class UsersController < ApplicationController
    def index 
        @users = User.all 
        render json: @users 
    end

    def show
        render json: @user
      end
    
      def create
        @user = User.new(user_params)
    
        if @user.save
          render json: @user, status: :created, location: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      private

    # def set_user
    #     @user = User.find(params[:id])
    #   end
      
    def user_params
        params.require(:user).permit(:username, :password_digest, :profile_type, :profile_id)
      end
end
