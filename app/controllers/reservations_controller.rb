class ReservationsController < ApplicationController
    def index
        render json: Reservation.all
    end
end
