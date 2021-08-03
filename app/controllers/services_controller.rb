class ServicesController < ApplicationController

    def index
        @services = Service.all
    
        render json: @services
      end
    
      
      def show
        render json: @service
      end
    
      
      def create
        @service = Service.new(service_params)
    
        if @service.save
          render json: @service, status: :created, location: @service
        else
          render json: @service.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @service.update(service_params)
          render json: @service
        else
          render json: @service.errors, status: :unprocessable_entity
        end
      end
      
      def destroy
        @service.destroy
      end
    
    private

    # def set_service
    #     @service = Service.find(params[:id])
    #   end
      
      def service_params
        params.require(:service).permit(:worker_id,  :service, :price)
      end
    
end
