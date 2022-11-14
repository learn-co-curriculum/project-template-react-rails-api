class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :genre, :"genre-ii", :hometown
end
