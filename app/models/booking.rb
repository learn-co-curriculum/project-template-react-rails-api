class Booking < ApplicationRecord
    belongs_to :provider
    belongs_to :task
end
