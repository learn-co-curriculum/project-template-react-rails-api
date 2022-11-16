class ReviewsController < ApplicationController
    # GET :index /reviews
    def index
        render json: Review.all
    end
    # GET :show /reviews/:id (serializer for reviews being shown to specific posts)
    def show
        review = Review.find(params[:id])
        render json: review
    end
    # POST :create /reviews/:id
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end
    # PATCH :update /reviews/:id

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    # DELETE :destroy /reviews/:id
    def destroy
        review=Review.find(params[:id])
        review.destroy
        head :no_content
       
    end

    private

    def review_params
        params.permit(:comment, :user_id, :plant_post_id)
    end
end
