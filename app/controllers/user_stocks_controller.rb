class UserStocksController < ApplicationController

    before_action :authorize
    
    def index
        render json: UserStock.all
    end

    def show
        user_stock = UserStock.find(params[:id])
        render json: user_stock
    end

    #can create a user/signup too for create method, prob wont use this
    def create
        user_stock = UserStock.create!(user_stock_params)
        render json: user_stock, status: :created
    end

    #update number of owned? not currently in the params for user_stocks
    def update
        user_stock = UserStock.find(params[:id])
        user_stock.update!(user_stock_params)
        render json: user_stock, status: 200
    end

    def destroy
        user_stock = UserStock.find(params[:id])
        user_stock.destroy
        head :no_content, status: :deleted
    end

    private 

    #form has name of stock and how many owned, rest get from backend
    def user_stock_params
        params.permit(:name, :symbol, :price, :company_id, :user_id)
    end

end
