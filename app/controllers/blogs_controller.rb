class BlogsController < ApplicationController
    def index
        blog = Blog.all
        render :json blog, include: :comments
       
    end
    
end
