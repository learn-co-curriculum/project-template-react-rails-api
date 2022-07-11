class User < ApplicationRecord
  has_many :bids, dependent: :destroy
  has_many :items, through: :bids

  has_many :posted_items, class_name: "Item", dependent: :destroy

  has_secure_password
end
