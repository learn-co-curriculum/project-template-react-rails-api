class ReservationType < ApplicationRecord
    has_many :reservations
    validates :reservation_type, presence: true
end
