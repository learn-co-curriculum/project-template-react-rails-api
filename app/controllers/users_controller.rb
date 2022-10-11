class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
      user = User.create!(user_params)  
      render json: user, status: :created
        
    end

    private
    def user_params
        params.permit(:name, :username, :password)
        
    end


    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
end
