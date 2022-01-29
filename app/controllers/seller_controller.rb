class SellerController < ApplicationController
    def index
        sellers = Seller.find_by!(user_id: params[:user_id])
        render json: sellers, status: 201
    end
    def show
        seller = Seller.find(params[:id])
        render json: seller, status: 201
    end
    def sellermatchuser
        seller = Seller.find_by(id: params[:slid])
        if(seller[:user_id] === (params[:usid]).to_i)
            b = true
            render json: {yesis: b},  status: 200
        else
            b = false
            render json: {yesis: b}, status: 200
        end
    end
end
