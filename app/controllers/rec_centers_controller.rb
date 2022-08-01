class RecCentersController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  
  #after setting up authorization through the UI, remove :resources_index from permitted routes
  skip_before_action :authorize, only: [:index, :show, :resources_index]

  ############################### /rec_centers
  def index
    render json: RecCenter.all
  end

  def show
    rec_center = RecCenter.find(params[:id])
    render json: rec_center
  end

  # Use to find resources for a specific rec center
  def resources_index
    rec_center = RecCenter.find(params[:rec_center_id])
    resources = rec_center.resources
    render json: resources
  end

end
