class CharactersController < ApplicationController
    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def allChars
        user = User.find(params[:user_id])
        render json: user.characters
    end

    def equipTrinket
        character = Character.find_by(name: params[:name])
        character.update(trinket: params[:trinket])
        render json:character
    end

    def equipWeapon
        character = Character.find_by(name: params[:name])
        character.update(weapon: params[:weapon])
        render json:character
    end

    def equipArmor
        character = Character.find_by(name: params[:name])
        character.update(armor: params[:armor])
        render json:character
    end

    def show
        character = Character.find_by(name: params[:name])
        render json: character
    end

    def destroy
        character = Character.find(params[:id])
        character.destroy
    end

    private

    def item_params
    end

    def character_params
        params.permit(:name, :user_id, :str, :ag, :intel, :exp, :exp_gain, :atk, :level, :charClass)
    end

end
