class Buyer < ApplicationRecord
    belongs_to :user
    has_many :sales, through: :buyer_sales
    validates :buy_price, presence: true, numericality: { greater_than_or_equal_to: 0}
end
