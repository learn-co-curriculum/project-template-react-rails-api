class ItemsController < ApplicationController
    def create
        item = Item.create(item_params)
        render json: item
    end

    def allItems
        character = Character.find_by(name:params[:name])
        render json: character.items
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
    end

    private

    def item_params
        params.permit(:character_id, :itemType, :str, :ag, :intel, :exp_gain, :atk)
    end

end
