class ShelvesController < ApplicationController
    def index
        render json: Shelf.all
    end
end
