class ItemsController < ApplicationController
  

def find_items
results = Scraper.new(params[:name])
info = results.combined_hash
filter = info.sort {|a,b| [ a[:price]] <=> [ b[:price]] }
render json: filter
end

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
    params.permit(:name, :image, :quantity, :store, :price)
end

end
