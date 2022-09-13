class ArtistsController < ApplicationController


    def index
    artists = Artist.all
    render json: artists
    end

    def show
    artist = find_artist
    render json: artist
    end

    def avalanche
        avs = Artist.where(stage: "Avalanche")
        order = avs.order(:performance_time)
        render json: order
    end

    def broncos
        broncos = Artist.where(stage: "Broncos")
        order = broncos.order(:performance_time)
        render json: order
    end

    def nuggets
        nugs = Artist.where(stage: "Nuggets")
        order = nugs.order(:performance_time)
        render json: order
    end

    def rockies
        rocks = Artist.where(stage: "Rockies")
        order = rocks.order(:performance_time)
        render json: order
    end

    private  

    def find_artist
       Artist.find(params[:id])
    end
end