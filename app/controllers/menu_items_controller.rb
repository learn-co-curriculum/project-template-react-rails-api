class MenuItemsController < ApplicationController
      def index  
        render json: MenuItem.all
      end
    
      def show 
        menu_item = MenuItem.find(params[:id])
        render json: menu_item    
      end
    
      def create 
        menu_item = MenuItem.create(menu_item_params)
        render json: menu_item, status: :created
      end
    
      def update  
        menu_item = MenuItem.find(params[:id])
        menu_item.update(menu_item_params)
        render json: menu_item, status: :updated
      end
    
      def destroy   
        menu_item = MenuItem.find(params[:id])
        menu_item.destroy
        head :no_content, status: :deleted
      end
    
      private
    
      def menu_item_params
        params.permit(:name, :price, :description, :item_type, :restaurant_id, :menu_id)
      end
end
