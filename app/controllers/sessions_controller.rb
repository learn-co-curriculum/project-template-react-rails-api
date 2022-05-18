class SessionsController < ApplicationController


    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] ||= user.id
            render json: user
            
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        ShoppingListItem.where(shopping_list_id: nil).destroy_all
        head :no_content
    end


    def cart
      sli =  ShoppingListItem.where(shopping_list_id: nil)
      render json: sli
    end
end
