class User < ApplicationRecord
    has_secure_password 
    has_many :foods
    has_many :exercises
end
