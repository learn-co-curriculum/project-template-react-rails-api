class User < ApplicationRecord
    has_many :properties
    has_many :sellers, through: :properties

    validates :username, presence: true
    validates :email, uniqueness: true
end
