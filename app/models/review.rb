class Review < ApplicationRecord
  belongs_to :user
  belongs_to :workout
  belongs_to :meal
end
