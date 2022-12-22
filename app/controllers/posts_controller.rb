class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def show
        found_post = Post.find_by_id!(params[:id])
        render json: found_post
    end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    private
    def post_params
        params.permit(:description, :image_url)
    end
end
