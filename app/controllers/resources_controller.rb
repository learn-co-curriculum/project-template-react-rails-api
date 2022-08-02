class ResourcesController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index, :show, :create, :destroy]

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

  def update
    resource = find_resource
    resource.update!(resource_update_params)
    render json: resource
  end

  def destroy
    resource = find_resource
    resource.destroy
    head :no_content
  end

  private
  def find_resource
    Resource.find_by!(id: params[:id])
  end

  def resource_update_params
    params.permit(:name, :sports_type_id)
  end
end
