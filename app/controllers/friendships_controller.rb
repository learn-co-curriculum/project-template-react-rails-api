class FriendshipsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    def index
        requested = @current_user.requested_friendship
        initiated = @current_user.initiated_friends
        render json: initiated + requested 
    end

    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

private

    def friendship_params
       params.permit(:friend_a_id, :friend_b_id) 
    end


end
