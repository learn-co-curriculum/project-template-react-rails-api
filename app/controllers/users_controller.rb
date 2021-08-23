class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []
# skip_before_action :authorize, only: [:create]

    def show
        user = User.find(params[:id])
        render json: user
    end
    
    def create
        user = User.create(user_params)
        render json: user
    end

    def login 
        user = User.find_by(username:user_params[:username])
        if (user && user.authenticate(user_params[:password]))
            render json: user
        else
            render json: {error: ['incorrect loging/password info']}
        end
    end

    private 
    def user_params 
        params.permit(:username, :password)
    end

    def render_not_found_response
        render json: {error: "User Not Found"}, status: :not_found
    end

end
