class Provider < ApplicationRecord
	has_many :appointments
	has_many :users, through: :appointments

	validates :name, :location, :specialty, presence: true
end
