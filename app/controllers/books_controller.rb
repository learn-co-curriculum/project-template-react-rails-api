class BooksController < ApplicationController

    #returns 5 random books to be displayed on the homepage as recomendations
    def index
        render json: Book.limit(5).order("RANDOM()")
    end

end
