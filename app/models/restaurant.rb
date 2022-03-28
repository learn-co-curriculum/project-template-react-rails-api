class Restaurant < ApplicationRecord
    has_secure_password
    has_one :menu
end
