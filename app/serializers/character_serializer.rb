class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image, :bio
end
