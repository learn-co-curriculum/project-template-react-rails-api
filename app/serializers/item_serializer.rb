class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemType, :str, :ag, :intel, :exp_gain
  has_one :character
end
