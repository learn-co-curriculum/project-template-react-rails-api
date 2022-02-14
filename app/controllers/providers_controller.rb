class ProvidersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    # stay logged in 
    def show
        provider = Provider.find(session[:provider_id])
        render json: provider
    end

end
