class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

   #sign-up
   def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #keep logged-in
    def show
        current_user = User.find(session[:user_id])
        render json: current_user, include: ['plant_posts','reviews.plant_post'], status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
