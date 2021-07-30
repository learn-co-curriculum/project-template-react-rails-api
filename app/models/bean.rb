class Bean < ApplicationRecord
    belongs_to :order
    has_many :orders
    has_many :users, through: :orders
    has_many :carts, through: :orders
end
