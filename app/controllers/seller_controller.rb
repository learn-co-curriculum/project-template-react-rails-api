class SellerController < ApplicationController
    def index
        sellers = Seller.find_by!(user_id: params[:user_id])
        render json: sellers, status: 201
    end
    def show
        seller = Seller.find_by!(user_id: params[:user_id])
        render json: seller, status: 201
    end
    def sellermatchuser
        seller = Seller.find_by(id: params[:slid])
        b = false
        if(seller.user_id === params[:usid])
            b = true
        end
        render json: {yesis: b}, status: 200
    end
end
