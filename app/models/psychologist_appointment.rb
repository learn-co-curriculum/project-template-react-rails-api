class PsychologistAppointment < ApplicationRecord
	belongs_to :user
	belongs_to :psychologist
	
	validates :startTime, presence: true
	validates :endTime, presence: true
end
