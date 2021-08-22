class ReviewsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    def index
        reviews = Review.all
        render json: reviews
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: {message: "Review deleted"}
    end

    def show
        reviews = Review.find(params[:id])
        render json: reviews
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
       
end
