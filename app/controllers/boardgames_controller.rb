class BoardgamesController < ApplicationController

    def index
        render json: Boardgame.all.order(:name),  status: :ok
    end

    def show
        boardgame = Boardgame.find(params[:id])
        render json: boardgame, serializer: UserBoardgameShowSerializer, status: :ok
    end

    def update
        boardgame = Boardgame.find(params[:id])
        boardgame.update!(boardgame_params)
        render json: boardgame, status: :ok
    end

    def create
        boardgame = Boardgame.create!(boardgame_params)
        render json: boardgame, status: :created
    end

    def destroy
        boardgame = Boardgame.find(params[:id])
        boardgame.destroy
        head :no_content
    end

    private
    def boardgame_params
        params.permit(:name, :picture_url, :num_players, :description, :genre, :est_time, :user_id, :borrow, :available)
    end
end
