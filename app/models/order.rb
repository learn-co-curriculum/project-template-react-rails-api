class Order < ApplicationRecord
    belongs_to :user
    belongs_to :cart
    has_many :order_items, dependent: :destroy

    has_many :beans, through: :order_items, source: :item, source_type:"Bean"
    has_many :drinks, through: :order_items, source: :item, source_type:"Drink"
end

