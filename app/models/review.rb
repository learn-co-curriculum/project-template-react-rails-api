class Review < ApplicationRecord
    belongs_to :book

    #limits ratings to be through 1 and 10
    validates :rating, length: {in: 1..10}
end
