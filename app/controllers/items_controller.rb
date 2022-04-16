class ItemsController < ApplicationController
    def create
        item = Item.create(item_params)
        render json: item
    end

    private

    def item_params
        params.permit(:character_id, :type, :str, :ag, :intel, :exp_gain)
    end

end
