class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []

    def index
        review = Review.all
        render json: review
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create(review_params)
        if review.valid?
        render json: review, status: :created
        else
        render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.permit(:comment)
    end

    def render_not_found_response
        render json: {error: "Review Not Found"}, status: :not_found
    end

end
