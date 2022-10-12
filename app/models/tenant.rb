class Tenant < ApplicationRecord
    has_many :houses
    has_many :landlords, through: :houses

    validates :name, presence: true
    validates :email, uniqueness: true
end
