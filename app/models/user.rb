class User < ApplicationRecord
  belongs_to :review
  belongs_to :dish
  validates :username, presence: true, uniqueness:true
  has_secure_password
end
