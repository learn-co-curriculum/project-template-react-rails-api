class VenueSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :name, :logo_url
end
