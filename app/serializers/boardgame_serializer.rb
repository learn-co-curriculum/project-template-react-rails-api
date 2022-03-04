class BoardgameSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture_url, :num_players, :summary, :genre, :est_time, :borrow, :available
  has_one :user, serializer: UserBoardgameIndexSerializer

  def summary
    "#{object.description[0..250]}"
  end
end
