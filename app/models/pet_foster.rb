class PetFoster < ApplicationRecord
  belongs_to :pet
  belongs_to :foster
end
