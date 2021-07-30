class PressOnsController < ApplicationController
    def index
        press_ons = PressOn.all
        render json: press_ons
    end
end
