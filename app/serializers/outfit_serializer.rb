class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :bonus, :description
end
