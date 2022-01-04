class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :name, :address, :details, :likes

  has_many :reviews
end
