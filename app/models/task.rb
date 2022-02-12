class Task < ApplicationRecord
    belongs_to :property
    has_many :bookings
    has_many :providers, through: :bookings
end
