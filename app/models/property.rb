class Property < ApplicationRecord
    has_many :sellers
    has_many :users, through: :sellers

    validates :name, presence: true
    validates :address, uniqueness: true
    validates :price, numericality: { greater_than: 100000 }
end
