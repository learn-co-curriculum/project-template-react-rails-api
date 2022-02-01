class AdminsController < ApplicationController

  # GET /admins
  def index
    render json: Admin.all
  end

  # GET /admins/:id
  def show
    admin = find_admin
    render json: admin
  end

  # PATCH /admin/:id
  def update
    admin = find_admin
    admin.update!(admin_params)
    render json: admin, status: :ok
  end

  # POST /admins
  def create
    admin = Admin.create!(admin_params)
    render json: admin, status: :created
  end

  # DELETE /admins/:id
  def destroy
    admin = find_admin
    admin.destroy!
    head :no_content
  end

  private

  def admin_params
    params.permit(:first_name, :last_name, :type, :email, :phone
  end

  def find_admin
    Admin.find(params[:id])
  end


end
