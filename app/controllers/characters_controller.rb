class CharactersController < ApplicationController
    get '/characters' do
        items =  Item.all
        items.to_json
      end
  
      get '/characters/:id' do
        characters = Characters.find(params[:id])
        characters.to_json
      end 
end
