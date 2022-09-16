class User < ApplicationRecord
	has_many :appointments
	has_many :providers, through: :appointments

	has_secure_password

	validates :username, :password, :password_confirmation, :full_name, :age, :address, :phone, :email, presence: true
end
