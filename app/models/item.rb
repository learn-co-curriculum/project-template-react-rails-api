class Item < ApplicationRecord
    has_many :shopping_list_items, dependent: :destroy
    has_many :shopping_lists, through: :shopping_list_items

    

    def total_cost
        if self.price
        self.price * self.quantity
        else
            0
        end
    end
end
