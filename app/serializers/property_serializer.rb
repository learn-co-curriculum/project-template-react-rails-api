class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :owner_occupied
  has_one :user
end
