class UserBoardgameShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture_url, :num_players, :description, :genre, :est_time, :borrow, :available
  has_one :user, serializer: UserBoardgameIndexSerializer
end
