class EquipmentController < ApplicationController
    get '/equipment' do
        items =  Item.all
        items.to_json
      end
  
      get '/equipment/:id' do
        equipment = Equipment.find(params[:id])
        equipment.to_json
      end 
end
