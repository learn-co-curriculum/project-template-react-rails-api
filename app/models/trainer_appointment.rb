class TrainerAppointment < ApplicationRecord
	belongs_to :user
	belongs_to :trainer
	
	validates :start_time, presence: true
	validates :end_time, presence: true
end
