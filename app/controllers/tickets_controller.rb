class TicketsController < ApplicationController

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end
    
    
    private
    
    def ticket_params
    params.permit(:quantity, :vip, :user_id, :festival_id)
    end
    
    end