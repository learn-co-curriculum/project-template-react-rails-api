class LikesController < ApplicationController

    def index
        likes = Like.all
        render json: likes, status: :ok
    end

    def show
        like = Like.find(params[:id])
        render json: like, status: :ok
    end

    def create
        like = Like.create!(params[:like_params])
        render json: like, status: :ok
    end

    private

    def like_params
        params.permit(:liked_person_id, :user_id)
    end
end
