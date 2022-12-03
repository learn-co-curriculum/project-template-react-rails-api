class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET all reservations
    def index 
        render json: Reservation.all
    end

    #POST new reservation
    def create
        reservation = Reservation.create!(reservation_params)
        render json: Reservation.find(reservation.user_id), status: 201
    end

    #PATCH reservations
    def update
        reservation = Reservation.find(params[:id])
        reservation.update!(reservation_params)
        render json: Reservation.find(reservation.user_id), status: :accepted
    end

    private

    def reservation_params
        params.permit(:user_id, :restaurant_id, :menu_id, :seats)
    end

    def render_not_found_response
        render json: {error: "Reservation not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end 
end

