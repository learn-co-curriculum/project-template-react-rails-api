class ReviewsController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews
    end 

    def show 
        review = Review.find(params[:id])
        render json: review 
    end


    def create 
        review = @current_user.reviews.create!(create_params)
        render json: review, status: :created
    end

    private 

    def create_params
        params.permit(:rating, :comments)
    end


end
