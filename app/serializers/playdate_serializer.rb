class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :location, :date, :parent_id, :user_id
end
