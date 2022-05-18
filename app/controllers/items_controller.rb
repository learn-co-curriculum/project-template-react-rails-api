class ItemsController < ApplicationController

def create
item = Item.create!(item_params)
render json: item
end

def index
item = Item.all
render json: item, method: :total_cost
end

def show

item = Item.find_by!(id: params[:id])
render json: item
end


private

def item_params
    params.permit(:name, :image, :quantity)
end

end
