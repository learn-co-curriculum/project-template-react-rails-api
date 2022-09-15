class User < ApplicationRecord
    belongs_to :company
    has_secure_password
    validates :email, presence:true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
