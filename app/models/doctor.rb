class Doctor < ApplicationRecord
    has_one :user, as :role

    has_many :appointments
    has_many :patients, through: :appointments
end
