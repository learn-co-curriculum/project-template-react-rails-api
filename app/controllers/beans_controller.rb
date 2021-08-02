class BeansController < ApplicationController
    def index
        beans = Bean.all
        render json: beans, include: [:users, :orders]
    end 

    def show
        bean = Bean.find(params[:id])
        render json: bean, include: [:users, :orders]
    end 
end
