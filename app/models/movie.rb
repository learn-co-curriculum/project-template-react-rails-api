class Movie < ApplicationRecord
    has_many :users
    has_many :users, through: :trivium
end
