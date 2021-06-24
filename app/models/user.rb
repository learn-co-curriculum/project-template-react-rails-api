class User < ApplicationRecord
	has_many :trainer_appointments
	has_many :psychologist_appointments
	has_many :trainers, through: :trainer_appointments
	has_many :psychologists, through: :psychologist_appointments

	has_secure_password

	validates :username, presence: true, uniqueness: true

end
