class UsersController < ApplicationController
    def index
        users = User.order(:codeBreakScore)
        render json: users.order(:codeBreakScore)
    end

    def create
        if (params[:password] != nil)
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Password can't be blank"] }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(codeBreakScore: params[:codeBreakScore])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
