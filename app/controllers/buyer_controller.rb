class BuyerController < ApplicationController
    def create
        buyer = Buyer.create!(buyer_params)
        render json: buyer, status: 201
    end
    def update
        buyer = Buyer.find_by!(user_id: params[:id])
        buyer.buy_price = params[:new_price]
        render json: buyer, status: 201
    end
    def show
        buyer = Buyer.find_by!(user_id: params[:id])
        render json: buyer, status: 201
    end
    def destroy
        todest = Buyer.find_by!(user_id: params[:id])
        todest.delete
        head :no_content
    end
    def youwin
        buyer = Buyer.find_by!(user_id: params[:id])
        buyer.buy_time = Date.today
        render json: buyer, status: 201
    end
    private
    def buyer_params
        params.permit(:item_id, :sale_id, :buy_price, :buy_time, :user_id)
    end
end
