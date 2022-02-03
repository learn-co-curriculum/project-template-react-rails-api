class PetApplicationSerializer < ActiveModel::Serializer
  attributes :id, :applicant_id, :pet_id
  belongs_to :applicant
  belongs_to :pet
end
