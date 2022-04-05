class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :str, :ag, :intel, :exp, :exp_gain
end
