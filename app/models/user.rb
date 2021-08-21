class User < ApplicationRecord
  belongs_to :review
  belongs_to :dish
  
  validates :name, presence: true
end
