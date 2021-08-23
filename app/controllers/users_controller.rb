class UsersController < ApplicationController
wrap_parameters format: []
    skip_before_action :authorize, only: [:create]

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

end
