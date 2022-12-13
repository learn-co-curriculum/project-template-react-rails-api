class Chef < ApplicationRecord

    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 5}
    validates :cuisine, presence: true
    validates :last_job, presence: true
    validates :phone, numericality: { only_integer: true }

end
