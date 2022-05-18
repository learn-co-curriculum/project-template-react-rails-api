class ShoppingListsController < ApplicationController

    def show
        sl = ShoppingList.find_by!(id: params[:id])
        render json: sl
    end

    def index
        sl = ShoppingList.all.where(user_id: session[:user_id])
        render json: sl
    end
end
