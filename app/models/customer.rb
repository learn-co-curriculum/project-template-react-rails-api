class Customer < ApplicationRecord
    has_many :appointments
    has_many :workers, through: :appointments
    has_one :user, as: :profile 
end
