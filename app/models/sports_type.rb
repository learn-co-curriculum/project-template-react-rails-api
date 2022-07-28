class SportsType < ApplicationRecord
    has_many :resources
    validates :sports_type, presence: true
    validates :image, presence: true
end
