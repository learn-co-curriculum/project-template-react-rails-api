class BooksController < ApplicationController

    #returns 5 random books to be displayed on the homepage as recomendations
    def index
        render json: Book.limit(5).order("RANDOM()")
    end

    def show 
        book = Book.find(params[:id])
        if book 
            render json: book 
        else 
            render json: {error: "Book not found"}
        end
    end

end
