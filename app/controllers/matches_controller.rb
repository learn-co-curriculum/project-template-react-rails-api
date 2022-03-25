class MatchesController < ApplicationController

    def index
        matches = Match.all
        render json: matches, status: :ok
    end

    def show
        match = Match.find(params[:id])
        render json: match, status: :ok
    end

    def destroy
        match = Match.find(params[:id])
        match.destroy
        head :no_content
    end

end
