class BooksController < ApplicationController
    def index
        render json: Book.all, status: :ok
    end

    def show
        book = find_book
        render json: book, serializer: BookReviewSerializer, status: :ok
    end

    def update
        book = find_book
        book.update!(book_params)
        render json: book, status: :accepted
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def destroy
        book = find_book
        book.destroy
        head :no_content
    end

    private

    def find_book
        Book.find(params[:id])
    end

    def book_params
        params.permit(:title, :author, :year, :description)
    end
end
