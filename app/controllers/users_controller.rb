class UsersController < ApplicationController
    #just to verify data
    def index
        render json: User.all
    end
end
