class BandsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Band.all, status: :ok
    end

    def show
      render json: Band.find(params[:id])
    end

    def create
        render json: Band.create!(band_params), status: :created
    end
    
      private
      def band_params
        params.permit(:name, :image_url, :genre, :secondary_genre, :hometown)
      end
end
