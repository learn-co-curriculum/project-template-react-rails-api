class CommentsController < ApplicationController

    def index
        render json: Comment.all, status: :ok
    end

    def show
        render json: Comment.find(params[:id])
    end

    def create
        render json: Comment.create!(comment_params), status: :created
    end

    def update
        updated_comment = Comment.find(params[:id])
        updated_comment.update(comment_params)
        render json: updated_comment
    end

    def destroy
        Comment.find(params[:id]).destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end
end
