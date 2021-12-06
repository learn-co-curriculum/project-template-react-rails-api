class User < ApplicationRecord
    has_many :characters
    has_secure_password
end
