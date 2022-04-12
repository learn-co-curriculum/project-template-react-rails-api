class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :attack, :level, :defense
end
