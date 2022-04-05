class User < ApplicationRecord
    has_secure_password
    has_many :user_stocks, dependent: :destroy
    has_many :companies, through: :user_stocks, dependent: :destroy
end
