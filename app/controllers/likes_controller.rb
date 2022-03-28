class LikesController < ApplicationController

    def index
        likes = Like.all
        render json: likes, status: :ok
    end

    def show
        like = Like.find(params[:id])
        render json: like, status: :ok
    end

    def like_profile
        like = Like.create!(params[:like_params])
        like.match_check
        render json: like, status: :ok
    end

    def disliked_profile
        like = Like.create!(params[:like_params])
        render json: like, status: :ok
    end

    private

    def like_params
        params.permit(:liked_person_id, :disliked_person_id, :user_id)
    end
end

