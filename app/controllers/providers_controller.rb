class ProvidersController < ApplicationController
  before_action :is_authorized?, only: :create

  def index
    providers = Provider.all
    locations = Provider.pluck(:location).uniq
    user_id = User.find_by(id: session[:user_id]).id
    data = [providers, locations, user_id]
    render json: data, status: :ok
  end

  def create
    provider = Provider.create!(provider_params)
    render json: provider, status: :created
  end

  private

  def provider_params
    params.permit(:name, :specialty, :location)
  end

end
