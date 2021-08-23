class FriendshipsController < ApplicationController
    

    def index
        friends = @current_user.requested_friendship.concat(@current_user.initiated_friends)
        render json: friends 
    end




end
