class WorkoutsController < ApplicationController

    def create
    end

    private 

    def workout_params() 
        params.permit(:name, :equipment)
    end

end
