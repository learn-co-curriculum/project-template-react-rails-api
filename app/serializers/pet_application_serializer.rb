class PetApplicationSerializer < ActiveModel::Serializer
  attributes :id, :applicant_id, :pet_id, :status
  belongs_to :applicant
  belongs_to :pet
end
