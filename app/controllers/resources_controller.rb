class ResourcesController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index]

  ############################### /resources
  def index
    render json: Resource.all
  end

  def show
    resource = Resource.find(params[:id])
    render json: resource
  end
end
