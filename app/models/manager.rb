class Manager < ApplicationRecord
    has_secure_password
    has_many :projects, dependent: :destroy
    has_many :employees, through: :projects
    
end