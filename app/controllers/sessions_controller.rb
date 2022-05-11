class SessionsController < ApplicationController
    
    def login

        user = User.find_by!(name: params[:username])

        if user&.authenticate(params[:password])

            render json: {user: "Welcome"}, status: :ok 
        else

            render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end
end