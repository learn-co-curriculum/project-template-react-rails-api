class Intake < ApplicationRecord
    # validates :reason_for_visit, presence: true

    belongs_to :appointment
end
