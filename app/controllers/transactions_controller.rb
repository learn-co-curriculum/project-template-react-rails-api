class TransactionsController < ApplicationController
    def new
      @transaction = Transaction.new
    end
  
    def create
      @transaction = Transaction.new(transaction_params)
      @transaction.user = current_user
      @transaction.book = Book.find(params[:book_id])
  
      if @transaction.save
        charge = Stripe::Charge.create(
          :amount => (@transaction.book.price * 100).to_i, # Stripe expects amount in cents
          :currency => "usd",
          :source => params[:stripeToken], # obtained with Stripe.js
          :description => "Charge for #{current_user.email}"
        )
  
        if charge.paid
          @transaction.update_attributes(transaction_id: charge.id, status: 'Paid')
          flash[:notice] = "Thanks for your purchase!"
          redirect_to @transaction
        else
          flash[:alert] = "Payment failed. Please try again."
          render :new
        end
      else
        render :new
      end
    end
  
    private
  
    def transaction_params
      params.require(:transaction).permit(:amount)
    end
  end
  