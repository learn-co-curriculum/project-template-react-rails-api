class Movie < ApplicationRecord
    has_many :trivias
    has_many :users, through: :trivias
end
