class GameInstanceSerializer < ActiveModel::Serializer
  attributes :id, :score, :belongs_to
end
