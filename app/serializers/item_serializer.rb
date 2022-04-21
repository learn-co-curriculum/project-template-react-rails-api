class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemType, :str, :ag, :intel, :exp_gain, :atk
  has_one :character
end
