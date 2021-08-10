class User < ApplicationRecord
    has_many :shelves
    has_many :books, through: :shelves
end
