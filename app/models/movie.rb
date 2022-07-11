class Movie < ApplicationRecord
    has_many :trivias
    has_many :users, through: :trivias


validates :name, :location, :image, presence: true
end
