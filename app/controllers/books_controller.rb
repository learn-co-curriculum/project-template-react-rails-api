class BooksController < ApplicationController
    def index
        render json: Book.all, status: :ok
    end

    def show
        book = find_book
        render json: book, status: :ok
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def destroy
        book = find_book
        book.destroy
        head :no-content
    end

    private

    def find_book
        Book.find(params[:id])
    end

    def book_params
        params.permit(:title, :author, :year, :description)
    end
end
