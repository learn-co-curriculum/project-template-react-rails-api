class Patient < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    
    has_one :user, as: :role

    has_many :appointments
    has_many :doctors, through: :appointments

end
