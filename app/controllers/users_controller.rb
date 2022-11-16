class UsersController < ApplicationController
    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         render json: user
    #     else 
    #         render json: { error: "Not authorized"}, status: :unauthorized
    #     end
    # end
    
    def register
        user = User.find_by(username: params[:username])
        if (user)
            render json: { error: "This username exists" }, status: :not_acceptable
        else 
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end

    def index
        render json: User.all, status: :ok
    end

    def user_params 
        params.permit(:username, :password)
    end

end
