class Sale < ApplicationRecord
    belongs_to :seller
    belongs_to :item
    has_many :user, through: :buyer
    has_many :buyer, dependent: :destroy
    validates :starting_bid, presence: true, numericality: { greater_than_or_equal_to: 0}
    validates :item_id, presence: true
    validates :seller_id, presence: true
    validates :bid_time, presence: true, numericality: { greater_than_or_equal_to: Float(Time.now)}
end
