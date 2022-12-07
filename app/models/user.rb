class User < ApplicationRecord
    has_secure_password 
    has_many :foods
    has_many :exercises

    validates :age, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 13, less_than_or_equal_to: 105 }

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: {in: 3..20}

    validates :calories_goal, presence: true
    validates :calories_goal, numericality: {greater_than_or_equal_to: 500, less_than_or_equal_to: 10000}

    validates :sex, presence: true
    
    validates :password, presence: true
    validates :password, length: {in: 8..20}
end
