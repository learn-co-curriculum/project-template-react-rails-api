class Appointment < ApplicationRecord
	belongs_to :user
	belongs_to :trainer
	belongs_to :psychologist
	
	validates :date, presence: true
	validates :time, presence: true
end
