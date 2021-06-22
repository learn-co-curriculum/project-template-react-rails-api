class Trainer < ApplicationRecord

has_many :appointments
has_many :users, through: :appointments 

validates :name, presence: :true
end
