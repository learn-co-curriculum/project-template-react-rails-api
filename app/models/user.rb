class User < ApplicationRecord
    has_many :reviews
    has_many :locations, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true 
end
