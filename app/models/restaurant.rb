class Restaurant < ApplicationRecord
    has_secure_password
    has_one :menu
    has_many :menu_items
end
