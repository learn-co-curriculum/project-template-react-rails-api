class FriendshipsController < ApplicationController

    def index
        friends = Friendship.all
        render json: friends 
    end


end
