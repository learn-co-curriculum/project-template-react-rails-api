class Resource < ApplicationRecord
  belongs_to :rec_center
  belongs_to :sports_type
  has_many :reservations

  validates :name, presence: true
  validates :rec_center_id, presence: true
  validates :sports_type_id, presence: true
end
