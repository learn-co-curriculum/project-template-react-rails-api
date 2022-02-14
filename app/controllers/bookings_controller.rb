class BookingsController < ApplicationController

    def create
        new_booking = Booking.create!(booking_params)
        render json: new_booking, status: :created
    end

    private

    def booking_params
        params.permit(:provider_id, :task_id, :date, :price)
    end

end
