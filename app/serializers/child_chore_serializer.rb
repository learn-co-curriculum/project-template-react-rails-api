class ChildChoreSerializer < ActiveModel::Serializer
  attributes :id, :reward, :time_to_complete, :is_completed
  has_one :user
  has_one :chore
end
