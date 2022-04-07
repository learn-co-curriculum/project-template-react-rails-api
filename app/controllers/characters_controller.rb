class CharactersController < ApplicationController
    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def allChars
        user = User.find(params[:user_id])
        render json: user.characters
    end

    private

    def character_params
        params.permit(:name, :user_id, :str, :ag, :intel, :exp, :exp_gain)
    end

end
