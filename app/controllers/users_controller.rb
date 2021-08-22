class UsersController < ApplicationController
wrap_parameters format: []
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        render json: user
    end

    private 

    def user_params 
        params.permit(:username, :password)
end
