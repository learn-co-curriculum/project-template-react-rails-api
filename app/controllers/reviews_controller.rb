class ReviewsController < ApplicationController
    def index
        render json: Review.all
    end
end
