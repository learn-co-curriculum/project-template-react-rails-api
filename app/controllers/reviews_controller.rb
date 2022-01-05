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

    def destroy
        review = find_params
        review.destroy 
        head :no_content 
    end 
    def update 
        review = Review.find_by(id: params[:id])
        review.update(create_params)
        render json: review 
    end

    private 

    def create_params
        params.permit(:rating, :comments)
    end

    def find_params 
        Review.find(params[:id])
    end


end
