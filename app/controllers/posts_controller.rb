class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def show
        render json: Post.find(params[:id]), serializer: PostUserSerializer
    end

    def show_comments
        render json: Post.find(params[:id]).comments
    end

    # def show_users
    #     render json: Post.find(params[:id])
    # end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    private
    def post_params
        params.permit(:description, :image_url)
    end
end
