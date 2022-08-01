class ReservationsController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index]

  ############################### /reservations
  def index
    render json: Reservation.all
  end
end
