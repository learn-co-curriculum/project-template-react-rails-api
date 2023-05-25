class TransactionsController < ApplicationController

  def index
    @transactions = Transaction.all
    render json: @transactions
  end
  
  def new
    @transaction = Transaction.new
  end
  
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user = @current_user
    @transaction.book = Book.find(params[:book_id])
  
    if @transaction.save
      # Perform any necessary actions for manual confirmation here
      # Generate confirmation code or success status
  
      # Example response with confirmation code
      render json: { confirmationCode: 'ABC123' }, status: :ok
    else
      render json: { error: 'Failed to create transaction' }, status: :unprocessable_entity
    end
  end
  
  private
  
  def transaction_params
    params.require(:transaction).permit(:amount)
  end
end
