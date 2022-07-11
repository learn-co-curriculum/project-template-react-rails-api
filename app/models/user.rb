class User < ApplicationRecord
    has_many :movies
    has_many :users, through: :trivium

    has_secure_password
  
    validates :username, presence: true, uniqueness: true
end
