class FactsController < ApplicationController

    def index
        render json: Fact.all
    end

    def show
        fact = Fact.find_by_id(params[:id])
        if fact
            render json: fact.to_json 
        else
            render json: {error: "Fun fact not found"}, status: :not_found
        end
    end

    def create
        fact = Fact.create!(fact_params)
        render json: fact, status: :created

    end


    private
    def fact_params
    params.permit(:fact, :user_id, :movie_id)
    end 

end
