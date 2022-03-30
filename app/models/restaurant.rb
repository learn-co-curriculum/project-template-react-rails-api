class Restaurant < ApplicationRecord
    has_one :menu, dependent: :destroy
    has_many :menu_items, dependent: :destroy
end
