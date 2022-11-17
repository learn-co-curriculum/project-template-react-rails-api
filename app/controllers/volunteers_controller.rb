class VolunteersController < ApplicationController
  def index
    render json: Volunteer.all, status: :ok
  end

  def show
    volunteer = Volunteer.find(params[:id])
    render json: volunteer,
           serializer: VolunteerWithActivitiesSerializer,
           status: :ok
  end

  def create
    volunteer = Volunteer.create!(volunteer_params)
    render json: volunteer, status: :created
  end

  def update
    volunteer = Volunteer.find(params[:id])
    volunteer.update!(volunteer_params)
    render json: volunteer, status: :accepted
  end

  def destroy
    volunteer = Volunteer.find(params[:id])
    volunteer.destroy
    render json: {}, status: :ok
  end

  private

  def volunteer_params
    params.permit(:name, :age, :email)
  end
end
