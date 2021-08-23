class FriendshipsController < ApplicationController
    

    def index
        requested = @current_user.requested_friendship
        initiated = @current_user.initiated_friends
        render json: initiated + requested 
    end




end
