class BandsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Band.all, status: :ok
    end
end
