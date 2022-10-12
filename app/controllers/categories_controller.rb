class CategoriesController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
         categories = Category.create!(category_params)
          render json: category, status: :created
         
    end
    def update
        category = Category.find_by(id: params[:id])

        if category
            category.update(category_params)
            render json: category
        else
            render json: {error: "Category not found"}, status: :not_found
        end
        
    end
    def destroy
       
        category = Category.find_by(id: params[:id])
        if category
          category.destroy
          head :no_content
        else
          render json: { error: "category not found" }, status: :not_found
        end
      end
    private

      def category_params
        params.permit(:name, :blog_id, :user_id)
      end
      def category_params
        params.permit(:name)
          
      end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
end

    
end
