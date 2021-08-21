class Review < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :dishes, through: :users
    
    validates :comment, presence: true
end
