class ArtistsController < ApplicationController


    def index
    artists = Artist.all
    render json: artists
    end

    def show
    artist = find_artist
    render json: artist
    end

    private  

    def find_artist
       Artist.find(params[:id])
    end
end