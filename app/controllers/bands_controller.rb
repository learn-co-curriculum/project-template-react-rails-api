class BandsController < ApplicationController
    skip_before_action :authorize, only: [:index]
end
