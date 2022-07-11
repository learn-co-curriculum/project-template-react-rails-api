class User < ApplicationRecord
    has_many :trivias
    has_many :movies, through: :trivias

    #has_secure_password
  
    validates :user_name, presence: true, uniqueness: true
end
