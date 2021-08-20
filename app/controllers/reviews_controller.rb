class ReviewsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    def index
        reviews = Review.all
        render json: reviews
    end
end
