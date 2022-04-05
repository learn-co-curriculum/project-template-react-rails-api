class ItemSerializer < ActiveModel::Serializer
  attributes :id, :type, :str, :ag, :intel, :exp_gain
  has_one :character
end
