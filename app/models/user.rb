class User < ApplicationRecord
    #has_secure_password
    has_many :orders, through: :restaurants
    # validates :name, presence: true
    # validates :password_digest, presence: true
    
end
