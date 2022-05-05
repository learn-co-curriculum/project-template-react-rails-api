class Category < ApplicationRecord
  belongs_to :user
  has_many :user_cities, dependent: :destroy
  has_many :cities,through: :user_cities
  validates :user, :name, presence: true
end
