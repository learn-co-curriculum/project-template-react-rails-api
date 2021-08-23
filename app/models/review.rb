class Review < ApplicationRecord
    belongs_to :user
    belongs_to :dish
    validates :comment, presence: true
end
