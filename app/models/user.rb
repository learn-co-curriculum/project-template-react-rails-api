class User < ApplicationRecord
    has_secure_password
    has_many :boardgames
    validates :username, :name, presence: true
    validates :username, :name, length: {minimum: 2}
    validates :username, uniqueness: true

end
