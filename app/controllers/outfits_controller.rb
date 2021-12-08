class OutfitsController < ApplicationController
    get '/outfits' do
        items =  Item.all
        items.to_json
      end
  
      get '/outfits/:id' do
        outfits = Outfits.find(params[:id])
        outfits.to_json
      end 
end
