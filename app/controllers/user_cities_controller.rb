class UserCitiesController < ApplicationController
    before_action :check_for_user
    before_action :create_user

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create
        user_city = UserCity.create!(user: get_user, category_id: params[:category_id], city_id: params[:city_id], note: params[:note])
        render json: user_city, status: :created
    end

    def destroy
        user_city = UserCity.find(params[:id])
        user_city.destroy
        render header: :not_found
    end

    def index
        render json: get_user.user_cities, status: :ok
    end

    def update
        user_city = UserCity.find(params[:id])
        user_city.update!(update_params)
        render json: user_city, status: :ok
    end


    private
    #need to add errors for if no user sub is found
    def check_for_user
        unless params.key?(:sub) && !params[:sub].empty?
            render json: { errors: "A user must log in to perform this action" }, status: :not_permitted
        end
    end

    def get_user
        User.find_by(sub: params[:sub])
    end

    # create user if no user sub is found
    def create_user
        if get_user.nil?
            User.create!(sub: params[:sub])
        end
    end

    def render_invalid (error)
        render json: { errors: error.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found (error)
        render json: { errors: error.record.errors.full_messages }, status: :not_found
    end

    def update_params
        params.permit(:category_id,:note)
    end

end
