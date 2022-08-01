class RecCentersController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  
  #after setting up authorization through the UI, remove :resources_index and :reservations_index from permitted routes
  skip_before_action :authorize, only: [:index, :show, :resources_index, :reservations_index, :reservations_today_index, :reservations_by_date_index]

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

  # Use to find reservations for a specific rec center
  def reservations_index
    rec_center = RecCenter.find(params[:rec_center_id])
    reservations = rec_center.reservations
    render json: reservations
  end

  def reservations_today_index
    rec_center = RecCenter.find(params[:rec_center_id])
    reservations =  rec_center.reservations.where(datetime_start: Date.today.all_day)
    render json: reservations
  end

  def reservations_by_date_index
    rec_center = RecCenter.find(params[:rec_center_id])
    reservations =  rec_center.reservations.where(datetime_start: Date.parse(params[:date]).all_day)
    render json: reservations
  end

end
