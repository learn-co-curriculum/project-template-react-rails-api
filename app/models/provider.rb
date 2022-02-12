class Provider < ApplicationRecord
    has_secure_password
    has_many :provider_services
    has_many :services, through: :provider_services
    has_many :bookings
    has_many :tasks, through: :bookings
end
