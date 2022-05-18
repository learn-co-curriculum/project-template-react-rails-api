class ShoppingListItem < ApplicationRecord
    belongs_to :item
    belongs_to :shopping_list
end
