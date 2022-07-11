class MoviesController < ApplicationController

    def index
        render json: Movie.all

    end

    def show
        movie = Movie.find(params[:id])
        render json: movie


    end

    def update
        movie = Movie.find(params[:id])
        movie.update(updated_params)
        render json: movie



    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created

    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        head :no_content

    end

    private

    def movie_params
        params.permit(:name, :location, :image)
    end

    def updated_params
        params.permit(:location)
    end


end









