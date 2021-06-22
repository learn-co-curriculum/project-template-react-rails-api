class User < ApplicationRecord
	has_many :appointments
	has_many :trainers, through: :appointments
	has_many :psychologists, through: :appointments

	has_secure_password

	validates :username, presence: true, uniqueness: true

end
