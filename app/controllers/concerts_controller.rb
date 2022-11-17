class ConcertsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        unique_concerts = Concert.all
        # .uniq { |c| c.date && c.band_id}
        render json: unique_concerts, status: :ok
    end

    def create
        concert = Concert.create!(concert_params)
        render json: concert.user, status: :created
    end

    private

    def concert_params
        params.permit(:comment, :tickets_remaining, :date, :band_id, :venue_id, :user_id, :link)
    end
end
