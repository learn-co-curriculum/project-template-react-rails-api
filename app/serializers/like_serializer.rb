class LikeSerializer < ActiveModel::Serializer
  attributes :id, :liked_person_id
  has_one :user
  has_one :match
end
