class PetApplication < ApplicationRecord
  belongs_to :pet
  belongs_to :applicant
  belongs_to :admin
end
