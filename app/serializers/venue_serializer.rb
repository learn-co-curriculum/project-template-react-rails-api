class VenueSerializer < ActiveModel::Serializer
  attributes :id, :city, :name, :logo_url
end
