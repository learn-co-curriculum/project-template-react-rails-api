class ShoppingList < ApplicationRecord
    has_many :shopping_list_items
    belongs_to :user
end
