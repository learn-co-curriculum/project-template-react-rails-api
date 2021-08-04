class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    
    has_secure_password

    belongs_to :role, polymorphic: true

end
