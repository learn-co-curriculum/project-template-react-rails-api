class Seller < ApplicationRecord
    has_many :properties
    has_many :users, through: :properties

    validates :name, presence: true
    validates :propert_name, uniqueness: true
end
