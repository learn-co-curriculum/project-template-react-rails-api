class Property < ApplicationRecord
    has_many :sellers
    has_many :users, through: :sellers

    validates :name, presence: true
    validates :address, uniqueness: true
end
