class MovieSerializer < ActiveModel::Serializer
  attributes :id, :location, :name, :image
end
