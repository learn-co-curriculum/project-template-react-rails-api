class User < ApplicationRecord
    has_many :reservations
    has_many :resources, through: :reservations
    has_many :rec_centers, through: :resources
    validates :email_address, presence: true
    validates :password, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    has_secure_password
end
