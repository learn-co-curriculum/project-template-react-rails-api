class Property < ApplicationRecord
    belongs_to :seller
    has_one :user

    validates :name, presence: true
    validates :address, uniqueness: true
    validates :price, numericality: { greater_than: 100000 }
end
