class Patient < ApplicationRecord
    has_one :user, as :role

    has_many :appointments
    has_many :doctors, through: :appointments
end
