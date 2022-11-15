class VenuesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Venue.all, status: :ok
    end
end
