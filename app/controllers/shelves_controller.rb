class ShelvesController < ApplicationController
    # just to verify data
    def index
        render json: Shelf.all
    end
end
