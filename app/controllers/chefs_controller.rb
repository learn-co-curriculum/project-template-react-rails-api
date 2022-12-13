class ChefsController < ApplicationController
    
    def index
        render json: Chef.all
     end
      
     def show
        chef = Chef.find(params[:id])
        render json: chef
     end
      
     def create
        chef = Chef.create!(chef_params)
        render json: chef
     end
      
      
     private
      
     def chef_params
        params.permit(:name, :email, :password, :phone, :image, :cuisine, :last_job)
     end
     
end
