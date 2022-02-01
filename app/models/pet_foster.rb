class PetFoster < ApplicationRecord
  belongs_to :pet
  belongs_to :foster
  belongs_to :admin
end
