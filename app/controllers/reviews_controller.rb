class ReviewsController < ApplicationController
    # just to verify data
    def index
        render json: Review.all
    end
end
