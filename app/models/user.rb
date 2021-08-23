class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :dishes, through: :reviews
  validates :username, presence: true, uniqueness:true
  has_secure_password
end
