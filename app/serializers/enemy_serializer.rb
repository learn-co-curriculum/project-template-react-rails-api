class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :attack, :level, :defense, :sprite
end
