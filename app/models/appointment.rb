class Appointment < ApplicationRecord
    belongs_to :doctor
    belongs_to :patient

    has_one :intake, dependent: :destroy
end
