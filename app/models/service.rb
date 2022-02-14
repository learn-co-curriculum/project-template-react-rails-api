class Service < ApplicationRecord
    has_many :provider_services
    has_many :providers, through: :provider_services
end
