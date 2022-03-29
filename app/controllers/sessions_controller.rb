class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        restaurant = Restaurant.find_by(username: params[:username])

        if restaurant&.authenticate(params[:password])
            session[:restaurant_id] = restaurant.id
            render json: restaurant, status: :created
        elsif user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id 
        session.delete :restaurant_id
        head :no_content
    end

end