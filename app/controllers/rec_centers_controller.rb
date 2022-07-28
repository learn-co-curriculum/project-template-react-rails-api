class RecCentersController < ApplicationController
    def index
        render json: RecCenter.all
    end
end
