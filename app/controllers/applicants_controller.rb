class ApplicantsController < ApplicationController

  # GET /applicants
  def index
    render json: Applicant.all.order(:id)
  end

  # GET /applicants/:id
  def show
    applicant = find_applicant
    render json: applicant
  end

  # PATCH /applicants/:id
  def update
    applicant = find_applicant
    applicant.update!(applicant_params)
    render json: applicant, status: :ok
  end

  # POST /applicants
  def create
    applicant = Applicant.create!(applicant_params)
    render json: applicant, status: :created
  end

  # DELETE /applicant/:id
  def destroy
    applicant = find_applicant
    applicant.destroy!
    head :no_content
  end


  private

  def applicant_params
    params.permit(:firstName, :lastName, :dob, :email, :phone, :rent_own, :home_type, :length_address, :yard_description, :children, :pet_allergy, :lifestyle, :approved, :user_id)
  end

  def find_applicant
    Applicant.find(params[:id])
  end


end
