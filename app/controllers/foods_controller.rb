class FoodsController < ApplicationController

    def create
        food = Food.create(food_params)
        if food.valid?
            render json: food, status: :created
        else
            render json: { errors: food.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        food = Food.find_by(id: params[:id])
        food.destroy
        head :no_content
    end

    private
    def food_params
        params.permit(:name, :weight, :calories, :user_id)
    end

end
