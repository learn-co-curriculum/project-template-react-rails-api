class PlaydatesController < ApplicationController

       def index 
        render json: Playdate.all
    end 


    def show
        # playdate = Playdate.find_by(id: session[:current_user])
        render json: playdate
    end 
    def create
        playdate = Playdate.create!(playdate_params)
        render json: playdate, status: :created
    end 

    # PUT "/users/:id"
    def update
        playdate = Playdate.find(params[:id])
        playdate.update!(playdate_params)
        render json: playdate, status: :created
    end

    # DELETE "/users/:id"
    def destroy
        playdate = Playdate.find(params[:id])
        playdate.destroy
        head :no_content
    end
    private 

    def playdate_params
        params.permit(:location, :date, :parent_id, :user_id)
    end 

end
