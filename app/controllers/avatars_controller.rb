class AvatarsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Avatar.all
    end

end
