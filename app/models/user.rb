class User < ApplicationRecord
    has_many :movies
    has_many :users, through: :trivium

    has_secure_password
  
    validates :user_name, presence: true, uniqueness: true
end
