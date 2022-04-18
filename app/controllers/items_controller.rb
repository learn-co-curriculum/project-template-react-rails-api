class ItemsController < ApplicationController
    def create
        item = Item.create(item_params)
        render json: item
    end

    def allItems
        character = Character.find(params[:character_id])
        render json: character.items
    end

    private

    def item_params
        params.permit(:character_id, :itemType, :str, :ag, :intel, :exp_gain)
    end

end
