class CommentsController < ApplicationController
    skip_before_action :authorize 
    wrap_parameters format: []

    def index
        comments = Comment.all 
        render json: comments
    end

    def create
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

private

    def comment_params
        params.permit(:comment)
    end


end
