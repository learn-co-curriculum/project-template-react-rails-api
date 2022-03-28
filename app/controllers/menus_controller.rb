class MenusController < ApplicationController
  
  def index
    render json: Menu.all
  end

end
