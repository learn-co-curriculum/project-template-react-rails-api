class RecCenterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :description, :opens_at, :closes_at, :image
end
