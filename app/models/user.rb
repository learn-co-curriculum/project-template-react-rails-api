class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: {minimum: 4}
    validates :password, length: {minimum: 6}
    has_secure_password
    has_one :seller, dependent: :destroy
    has_many :sales, through: :buyer 
    has_many :buyer, dependent: :destroy
end
