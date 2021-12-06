class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :type, :effect, :range
end
