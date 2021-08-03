class Worker < ApplicationRecord
    has_many :appointments
    has_many :customers, through: :appointments
    has_many :services
    has_one :user, as: :profile 
    has_many :timeslots 
end
