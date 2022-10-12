class House < ApplicationRecord
    belongs_to :landlord
    belongs_to :tenant

    validates :description, length: 20
    validates :location, precence: true
    
end
