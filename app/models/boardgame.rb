class Boardgame < ApplicationRecord
  belongs_to :user
  validates :name, length: {minimum: 2}
  validates :user_id, :name, :num_players, :borrow, :available, presence: true
  validates :picture_url, allow_blank: true, format: { with: %r{.(gif|jpg|png)\Z}i, message: 'must be a URL for GIF, JPG or PNG image.' }
end
