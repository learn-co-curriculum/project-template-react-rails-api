class OwnersController < ApplicationController

    def create
        new_owner = Owner.create!(owner_params)
        render json: new_owner, status: 201
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
    end

    private

    def owner_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
