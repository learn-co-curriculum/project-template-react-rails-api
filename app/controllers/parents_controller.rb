class ParentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json = Parent.all
    end
    def show
        render json = Parent.find(params[:id])
        render json = parent
    end
    private 
   def render_not_found_response
    render json:{error: "Parent not found" }, status: :not_found
   end
end
