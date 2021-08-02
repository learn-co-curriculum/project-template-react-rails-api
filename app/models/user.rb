class User < ApplicationRecord
    has_many :orders
    has_one :cart
    has_many :beans, through: :orders
    has_many :drinks, through: :orders

    has_secure_password

    validates :username, presence: true, length: {minimum: 5}, uniqueness: true
    validates :address, presence: true, length: {minimum: 5}
    validates :email_address, presence: true, length: {minimum: 5}, uniqueness: true
end
