class Book < ApplicationRecord
    has_many :shelves
    has_many :users, through: :shelves
end
