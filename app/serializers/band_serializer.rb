class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :genre, :secondary_genre, :hometown

  has_many :concerts
end
