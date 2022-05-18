class ShoppingListItemsController < ApplicationController
    def show
        sli = ShoppingListItem.find_by!(id: params[:id])
        render json: sli
    end

    def index
        sli = ShoppingListItem.all
        render json: sli
    end

    

    def create
        sli = ShoppingListItem.new(params.permit(:item_id, :shopping_list_id))
        sli.build_shopping_list
        sli.save
        render json: sli
        # sli = ShoppingListItem.create!(params.permit(:item_id, :shopping_list_id))
        # render json: sli
    end
end
