class ProvidersController < ApplicationController

  def index
    render json: Provider.all, status: :ok
  end

end
