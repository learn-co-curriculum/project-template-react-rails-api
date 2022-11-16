class Review < ApplicationRecord
  belongs_to :user
  belongs_to :plant_post

  validates :comment, presence: true
  validates :comment, length: { in: 5..200 }
 
end

# Reviews: max of 200 characters, min of 5.

# :greater_than_or_equal_to