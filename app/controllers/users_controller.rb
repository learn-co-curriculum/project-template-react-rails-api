class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end


    def show
        render json: current_user, status: :ok

    end 
    # def show
    #     if current_user
    #       render json: current_user, status: :ok
    #     else
    #       render json: "No current session stored", status: :unauthorized
    #     end
    #   end
    # def show
    #     user = User.find(params[:id])
    #     render json: user, status: :ok
    # end

    def update
        user = User.find(params[:id])
        user.update!(user_params_update)
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params_create)
        session[:current_user] = user.id

        render json: user, status: :created
    end

    # def destroy
    #     user = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end

    private
    def user_params_update
        params.permit(:username, :favorite, :borrowed)
    end
    def user_params_create
        params.permit(:username, :password)
    end
end
