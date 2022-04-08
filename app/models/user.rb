class User < ApplicationRecord
    has_secure_password
    has_many :user_stocks, dependent: :destroy
    has_many :companies, through: :user_stocks, dependent: :destroy

    validates :username, :password, :email, presence: true
    validates :username, uniqueness: true
    # validates :password, uniqueness: true
    validates :email, uniqueness: true 
end
