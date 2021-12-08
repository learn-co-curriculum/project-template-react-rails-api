class SpellsController < ApplicationController
    get '/spells' do
        items =  Item.all
        items.to_json
      end
  
      get '/spells/:id' do
        spells = Spells.find(params[:id])
        spells.to_json
      end 
end
