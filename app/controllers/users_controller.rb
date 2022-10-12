class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
      user = User.create(user_params) 
       if user.valid?
      render json: user, status: :created
       else
        render json:{errors: user.errors.full_messages}, status: :unprocessable_entity
       end
    end
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    private
    def user_params
        params.permit(:bio, :username, :password, :password_confirmation)
        
    end

   


    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
end
