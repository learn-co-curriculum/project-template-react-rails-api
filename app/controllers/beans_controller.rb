class BeansController < ApplicationController
    def index
        beans = Bean.all
        render json: beans
    end 

    def show
        bean = Bean.find(params[:id])
        render json: bean
    end 
end
