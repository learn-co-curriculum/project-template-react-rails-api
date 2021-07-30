class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, length: {minimum: 5}, uniqueness: true
    validates :address, presence: true, length: {minimum: 5}
    validates :email_address, presence: true, length: {minimum: 5}, uniqueness: true
end
