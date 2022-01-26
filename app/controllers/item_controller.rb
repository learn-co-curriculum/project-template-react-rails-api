class ItemController < ApplicationController
    def create
        item = Item.create!(item_params)
        render json: item, status: 201
    end
    def show
        item = Item.find(params[:id])
        render json: item, status: 202
    end
    def index
        items = Item.all
        render json: items, status: 202
    end
    private
    def item_params
        params.permit(:httpimage, :name)
    end
end
