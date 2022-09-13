class ArtistsController < ApplicationController

    def index
    render json: Artist.all
    end

    def show
    render json: @artist
    end

    private  

    def find_artist
        @artist = Artist.find(params[:id])
    end
end