class User < ApplicationRecord
  has_many :likes 
  has_secure_password
end
