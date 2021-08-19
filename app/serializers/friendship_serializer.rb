class FriendshipSerializer < ActiveModel::Serializer
  attributes :id
  has_one :friend_a
  has_one :friend_b
end
