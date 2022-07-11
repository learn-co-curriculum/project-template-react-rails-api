class FactSerializer < ActiveModel::Serializer
  attributes :id, :fact, :user_id, :movie_id
end
