class User < ApplicationRecord
    has_many :reviews
    has_many :workouts, through: :reviews
    has_many :meals, through: :reviews

    has_secure_password
    
end
