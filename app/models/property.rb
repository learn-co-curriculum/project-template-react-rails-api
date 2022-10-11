class Property < ApplicationRecord
    has_many :sellers
    has_many :users, through: :sellers
end
