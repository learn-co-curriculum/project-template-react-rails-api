class Drink < ApplicationRecord
    has_many :order_items, as: :item
    has_many :orders, through: :order_items, as: :item
end
