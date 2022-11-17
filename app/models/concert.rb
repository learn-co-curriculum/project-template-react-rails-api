class Concert < ApplicationRecord
  belongs_to :band
  belongs_to :venue
  belongs_to :user

  validates :band_id, uniqueness: {scope: [:venue_id, :date, :user_id]}

end
