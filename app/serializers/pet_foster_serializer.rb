class PetFosterSerializer < ActiveModel::Serializer
  attributes :id, :pet_id, :foster_id, :active
  belongs_to :pet
  belongs_to :foster
end
