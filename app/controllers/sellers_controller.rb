class SellersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        sellers = Seller.all
        render json: sellers
    end

    def show
        seller = find_seller
        render json: seller
    end

    private
    def find_seller
        Seller.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Seller not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
