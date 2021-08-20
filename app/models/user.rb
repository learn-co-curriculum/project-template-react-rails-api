class User < ApplicationRecord
  belongs_to :review
  belongs_to :dish
end
