class ConcertsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Concert.all, status: :ok
    end
end
