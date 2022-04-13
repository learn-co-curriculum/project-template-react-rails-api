class UserStock < ApplicationRecord
  belongs_to :company
  belongs_to :user

  validates :price, presence: true
  validates :price, numericality: true
end
