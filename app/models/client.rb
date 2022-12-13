class Client < ApplicationRecord

    has_secure_password
    
    validates :email, presence: true, uniqueness: true
    validates :phone, presence: true, uniqueness: true, length: { is: 10 }, numericality: { only_integer: true }
end
