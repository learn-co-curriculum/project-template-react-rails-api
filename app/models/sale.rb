class Sale < ApplicationRecord
    belongs_to :seller
    belongs_to :item
    has_many :user, through: :buyer
    has_many :buyer, dependent: :destroy
    validates :bid, presence: true
    validates :starting_bid, presence: true, numericality: { greater_than_or_equal_to: 0}
    validates :item_id, presence: true
    validates :seller_id, presence: true
    validates :bid_time, presence: true, numericality: { greater_than_or_equal_to: Float((String(Time.now).split(/[-:]/)[0] + String(Time.now).split(/[-:]/)[1] + String(Time.now).split(/[-:]/)[2].sub(/ /, "") + "." + String(Time.now).split(/[-:]/)[3].sub(/ /, "")))}
end