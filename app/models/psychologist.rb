class Psychologist < ApplicationRecord

	has_many :psychologist_appointments
	has_many :users, through: :psychologist_appointments 

	validates :name, presence: :true	
end
