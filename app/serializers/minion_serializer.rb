class MinionSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :bio
end
