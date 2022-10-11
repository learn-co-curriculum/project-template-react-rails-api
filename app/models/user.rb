class User < ApplicationRecord
    belongs_to :seller

    validates :username, presence: true
    validates :email, uniqueness: true
end
