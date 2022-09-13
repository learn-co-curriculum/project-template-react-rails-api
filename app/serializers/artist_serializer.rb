class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :genre, :stage, :festival_id, :image, :performance_time
end
