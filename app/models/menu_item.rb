class MenuItem < ApplicationRecord
  belongs_to :menu
  belongs_to :restaurant
  has_one :order_item, dependent: :destroy

end
