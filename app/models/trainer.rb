class Trainer < ApplicationRecord

has_many :trainer_appointments
has_many :users, through: :trainer_appointments 

validates :name, presence: :true
end
