class RecCentersController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index]

  ############################### /rec_centers
  def index
    render json: RecCenter.all
  end
end
