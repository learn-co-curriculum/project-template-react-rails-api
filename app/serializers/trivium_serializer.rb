class TriviumSerializer < ActiveModel::Serializer
  attributes :id, :trivia, :user_id, :movie_id
end
