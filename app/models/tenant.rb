class Tenant < ApplicationRecord
    has_many :houses
    has_many :landlords, through: :houses

    
end
