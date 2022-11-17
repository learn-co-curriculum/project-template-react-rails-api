class ActivitiesController < ApplicationController
  def index
    render json: Activity.all, status: :ok
  end

  def create
    activity = Activity.create!(activity_params)
    render json: activity, status: :created
  end

  def destroy
    activity = Activity.find(params[:id])
    activity.destroy
    render json: {}, status: :ok
  end

  private

  def activity_params
    params.permit(:organization, :activity_name, :activity_description)
  end
end
