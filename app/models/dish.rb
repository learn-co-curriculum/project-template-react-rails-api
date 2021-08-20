class Dish < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :reviews, through: :users
end
