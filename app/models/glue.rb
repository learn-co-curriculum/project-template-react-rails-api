class Glue < ApplicationRecord
    has_many :cart_items, as: :item
    has_many :shopping_carts, through: :cart_items , as: :item
end
