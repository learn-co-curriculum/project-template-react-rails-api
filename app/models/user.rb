class User < ApplicationRecord
    has_secure_password

    has_many :properties
    has_many :sellers, through: :properties

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
