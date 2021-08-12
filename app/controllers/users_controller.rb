class UsersController < ApplicationController
    #just to verify data
    def index
        render json: User.all
    end

    #create a user via signing in
    def create
        user = User.create(user_params)
        if user.valid?
            render json: {id: user.id, name: user.name, fav_genre: user.fav_genre, bio: user.bio}
        else 
            render json: {message: user.errors.full_messages}
        end
    end

    private

    #parameters a user will need to sign up
    def user_params
        params.require(:user).permit(:name, :password, :fav_genre, :bio)
    end
end
