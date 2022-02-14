class OwnersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        new_owner = Owner.create!(owner_params)
        render json: new_owner, status: 201
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
    end
    
    # stay logged in 
    def show
        owner = Owner.find(session[:owner_id])
        render json: owner
    end
    
    private

    def owner_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
