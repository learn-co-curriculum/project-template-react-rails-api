class User < ApplicationRecord
    has_many :movies
    has_many :users, through: :trivium
end
