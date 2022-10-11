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

    def update
        blog = Blog.find_by(id: params[:id])

        if blog
            blog.update(blogs_params)
            render :json blog
        else
            render json: {error: "Blog not found"}, status: :not_found
        end

        
    end
    def destroy
       
        blog = Blog.find_by(id: params[:id])
        if blog
          blog.destroy
          head :no_content
        else
          render json: { error: "Blog not found" }, status: :not_found
        end
        
    end

    private
    def blog_params
        params.permit(:user_id, :title, :category, :image_url, :author )
    end
    def blogs_params
        params.permit(:title, :category)
        
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
end
