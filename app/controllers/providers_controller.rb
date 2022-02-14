class ProvidersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

end
