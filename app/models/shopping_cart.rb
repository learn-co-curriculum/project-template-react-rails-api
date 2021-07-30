class ShoppingCart < ApplicationRecord
    belongs_to :user

    has_many :payments
    has_many :users, through: :payments

end
