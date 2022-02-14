class ProvidersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    def create
        new_provider = Provider.create!(provider_params)
        render json: new_provider, status: 201
    end

    def destroy
        provider = Provider.find(params[:id])
        provider.destroy
    end

    def show
        provider = Provider.find(params[:id])
        render json: provider, status: ok
    end

    private

    def provider_params
        params.permit(:name, :email, :password, :password_confirmation, :location)
    end
end
