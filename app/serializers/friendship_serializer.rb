class FriendshipSerializer < ActiveModel::Serializer
  attributes :id
  has_one :friend_a, include: [:name, :user_name, :avatar]
  has_one :friend_b, include: [:name, :user_name, :avatar]
end
