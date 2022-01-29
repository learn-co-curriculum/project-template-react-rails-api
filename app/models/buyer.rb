class Buyer < ApplicationRecord
    belongs_to :user
    belongs_to :sale
    validates :buy_price, presence: true, numericality: { greater_than_or_equal_to: 0}
end
