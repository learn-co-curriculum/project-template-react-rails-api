class User < ApplicationRecord
  has_many :concerts, dependent: :destroy 
  has_many :bands, through: :concerts

  has_secure_password

end
