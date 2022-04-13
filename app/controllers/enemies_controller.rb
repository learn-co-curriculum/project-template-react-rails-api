class EnemiesController < ApplicationController
    def find_by_level
        enemies = Enemy.where(level: params[:level])
        render json: enemies
    end
end
