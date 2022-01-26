class SalesController < ApplicationController
    def create
        sale = Sale.create!(sales_params)
        render json: sale, status: 201
    end
    def index
        sales = Sale.all
        render json: sales, status: 201
    end
    def show
        sales = Sale.find(params[:id])
        render json: sales, status: 201
    end
    def update
        render json: {error: 5}, status: 200
    end
    def destroy
        sale = Sale.find(params[:id])
        sale.destroy
        head :no_content
    end
    private
    def sales_params
        params.permit(:seller_id, :item_id, :bid, :starting_bid, :bid_time)
    end 
end
