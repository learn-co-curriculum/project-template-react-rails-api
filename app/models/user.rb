class User < ApplicationRecord
    has_secure_password
    has_many :plant_posts, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :reviewed_plant_posts, :through => :reviews, :source => :plant_post

    validates :password, length: { minimum: 8 }
    validates :username, :password, presence: true
end




