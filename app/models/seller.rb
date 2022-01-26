class Seller < ApplicationRecord
    belongs_to :user
    has_many :sales, dependent: :destroy
end
