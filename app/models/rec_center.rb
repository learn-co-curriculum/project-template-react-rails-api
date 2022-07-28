class RecCenter < ApplicationRecord
    has_many :resources
    has_many :reservations, through: :resources
    has_many :users, through: :reservations

    validates :name, presence: true
    validates :address, presence: true
    validates :phone, presence: true
    validates :description, presence: true
    validates :opens_at, presence: true
    validates :closes_at, presence: true
    validates :image, presence: true
end
