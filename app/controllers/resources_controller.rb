class ResourcesController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index, :show, :create]

  ############################### /resources
  def index
    render json: Resource.all
  end

  def show
    resource = find_resource
    render json: resource
  end

  def create
    resource = Resource.create!(params.permit(:name, :rec_center_id, :sports_type_id))
    render json: resource, status: :created
  end

  private
  def find_resource
    Resource.find_by!(id: params[:id])
  end
end
