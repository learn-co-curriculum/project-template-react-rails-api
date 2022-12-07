class Restaurant < ApplicationRecord

    has_many :menus
    has_many :orders

  validates :name, :location, presence: true
end
