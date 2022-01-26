class SellerController < ApplicationController
    def index
        sellers = Seller.find_by!(user_id: params[:user_id])
        render json: sellers, status: 201
    end
    def show
        seller = Seller.find_by!(user_id: params[:user_id])
        render json: seller, status: 201
    end
end
