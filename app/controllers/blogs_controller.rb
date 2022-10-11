class BlogsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        blog = Blog.all
        render :json blog, include: :comments
       
    end
    def create
        blog = Blog.create!(blog_params)
        render :json blog, status: :created
    end

    private
    def blog_params
        params.permit(:user_id, :title, :category, :image_url, :author_id )
    end
    
end
