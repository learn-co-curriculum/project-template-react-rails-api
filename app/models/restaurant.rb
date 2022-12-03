class Restaurant < ApplicationRecord

    has_many :users
    has_many :menus
    has_many :reservations

  validates :name, :location, presence: true
end
