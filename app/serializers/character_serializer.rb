class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :str, :ag, :intel, :exp, :exp_gain
end
