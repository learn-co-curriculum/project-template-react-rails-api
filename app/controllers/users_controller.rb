class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    before_action :create_or_find_household, only: [:create]

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "Not auth" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def create_or_find_household
        @household = Household.find_or_create_by(last_name: params[:last_name])
    end

    def user_params
        params.permit(:first_name, :username, :email, :is_parent, :password).merge({household_id: @household.id})
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end