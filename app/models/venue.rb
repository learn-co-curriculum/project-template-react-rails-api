class Venue < ApplicationRecord
  has_many :concerts, dependent: :destroy 
  has_many :bands, through: :concerts
end
