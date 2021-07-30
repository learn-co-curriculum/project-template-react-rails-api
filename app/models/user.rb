class User < ApplicationRecord
    has_secure_password
    
    has_one :shoppings_cart 

    has_many :payments
    has_many :shoppings_carts, through: :payments
end
