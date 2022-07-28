class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :rec_center
  has_one :sports_type
end
