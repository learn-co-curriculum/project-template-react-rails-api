class Landlord < ApplicationRecord
    has_secure_password
    has_many :houses
    has_many :tenants, through: :houses

    validates :bio, length: {minimum: 50}

end
