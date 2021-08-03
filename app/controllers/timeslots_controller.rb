class TimeslotsController < ApplicationController
    def index
        @timeslot = Timeslot.all
    
        render json: @timeslot
      end
    
      
      def show
        render json: @timeslot
      end
    
      
      def create
        @timeslot = Timeslot.new(timeslot_params)
    
        if @timeslot.save
          render json: @timeslot, status: :created, location: @timeslot
        else
          render json: @timeslot.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @timeslot.update(timeslot_params)
          render json: @timeslot
        else
          render json: @timeslot.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @timeslot.destroy
      end

    private

    # def set_timeslot
    #   @timeslot = Timeslot.find(params[:id])
    # end

   
    def timeslot_params
        params.require(:timeslot).permit(:worker_id, :date_time)
    end
end
