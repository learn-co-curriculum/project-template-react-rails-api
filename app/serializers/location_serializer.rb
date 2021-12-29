class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :name, :address, :details

  has_many :reviews
end
