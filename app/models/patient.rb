class Patient < ApplicationRecord
	has_many :appointments
	has_many :providers, through: :appointments

	has_secure_password
end
