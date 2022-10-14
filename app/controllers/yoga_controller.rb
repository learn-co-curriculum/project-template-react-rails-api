class YogaController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_feedback

  def index
  yoga=Yoga.all
  render json: yoga, status: :ok
  end

  def create
  yoga=Yoga.create!(yoga_params)
  render json: yoga, status: :created
  end
  
  def show
    yoga=Yoga.find_by(id: params[:id)
    render json: yoga, status: :ok
  end

  def update
    yoga=Yoga.find_by(id: params[:id])
    yoga.update(yoga_params)
    render json: yoga
  end

  def destroy
    yoga=Yoga.find_by(id: params[:id])
    yoga.destroy
    head :no_content
  end

  private
  def yoga_params
    params.permit(:name, :url, :trainer_id)
  end

  def unprocessable_entity_feedback(invalid)
    render json: {error: invalid.record.error}, status: :unprocessable_entity
end

end
