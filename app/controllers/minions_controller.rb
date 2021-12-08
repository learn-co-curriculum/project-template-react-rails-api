class MinionsController < ApplicationController
    get '/minions' do
        items =  Item.all
        items.to_json
      end
  
      get '/minions/:id' do
        minions = Minions.find(params[:id])
        minions.to_json
      end 
end
