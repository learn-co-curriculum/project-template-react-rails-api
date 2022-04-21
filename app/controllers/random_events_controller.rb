class RandomEventsController < ApplicationController
    def show
        rnd = RandomEvent.find(params[:id])
        render json: rnd
    end
end
