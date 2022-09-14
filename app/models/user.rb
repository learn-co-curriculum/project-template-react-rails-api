class User < ApplicationRecord
  has_secure_password
  # has_many :trails through: favorites
end
