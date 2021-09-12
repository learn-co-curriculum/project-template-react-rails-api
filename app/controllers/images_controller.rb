class ImagesController < ApplicationController

    def index
        render json: Images.all
    end
    
    def create
        image = @current_user.images.create!(image_params)
        render json: image, status: :created
    end

    def update
        image = Images.find(params[:id])
        if image
            image.update(image_params)
            render json: image, status: :accepted
        else
            render json: {error:"Image not found"}, status: :not_found
        end
    end

    def destroy
        image = Image.find(params[:id])
        if image
            image.destroy
            head :no_content
        else
            render json: {error:"Image not found"}, status: :not_found
        end
    end

      private
    
      def image_params
        params.permit(:title, :description, :image_url)
      end
end
