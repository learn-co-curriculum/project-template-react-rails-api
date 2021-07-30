class HandCaresController < ApplicationController
    def index
        hand_cares = HandCare.all
        render json: hand_cares
    end
end
