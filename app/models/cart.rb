class Cart < ApplicationRecord
    belongs_to :user
    has_many :orders
    # has_many :drinks, through: :orders
    # has_many :beans, through: :orders
end
