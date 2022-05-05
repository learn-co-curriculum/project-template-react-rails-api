class UserCity < ApplicationRecord
  validates :user, :category, :city, presence: true
  validates :city, uniqueness: { scope: [ :user, :category ] }

  belongs_to :user
  belongs_to :category
  belongs_to :city
end
