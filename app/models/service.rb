class Service < ApplicationRecord
    has_many :provider_services, dependent: :destroy
    has_many :providers, through: :provider_services
end
