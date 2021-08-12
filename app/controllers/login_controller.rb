class LoginController < ApplicationController
    def create 
        user = User.find_by(name:params[:user][:name])
        if user && user.authenticate(params[:user][:password])
            render json: {id: user.id, name: user.name, fav_genre: user.fav_genre, bio: user.bio}
        else
            render json: {message: ['incorrect user and/or password']}
        end
    end
end
