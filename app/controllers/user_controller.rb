class UserController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :do_the_saving
rescue_from ActiveRecord::RecordNotFound, with: :do_the_other_saving
    def create # i do a little of practically copy and pasting, if confuse refer to lesson on password protection
        user = User.create!(user_params)
        Seller.create!(user_id: user.id)
        session[:user_id] = user.id
        render json: {username: user.username, id: user.id}, status: 201 
    end
    def index
        users = User.all
        render json: users, status: 202
    end
    def show
        user = User.find(params[:id])
        render json: user, status: 201
    end
    def update
        user = User.find(params[:id])
        if(params[:username].length > 3)
            user.username = params[:username]
            render json: user, status: 201
        else
            render json: {error: "That is not correct you must be at least 4 letters tall to ride this one"}, status: :unprocessable_entity
        end
    end
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    def login
        user = User.find_by(username: user_params[:username])
        if user&.authenticate(user_params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "User Invalid"}, status: :unauthorized
        end
    end
    def relog
        user = User.find(session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not real"}, status: :unauthorized
        end
    end
    def sales
        user = User.find(params[:id])
        render json: user, include: :seller
    end
    def buys

    end
    def salesnbuys

    end
    def userbysale
        ids = Seller.find(params[:id]).user_id
        user = User.find(ids)
        render json: user, status: 200
    end
    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
    def do_the_saving(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
    def do_the_other_saving
        render json: { error: "This id (#{params[:id]}) is invalid you dumb fuck" }, status: :not_found
    end
end
