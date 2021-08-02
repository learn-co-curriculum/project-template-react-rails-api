class OrderItem < ApplicationRecord
    belongs_to :order
    belongs_to :item, polymorphic: true
end
