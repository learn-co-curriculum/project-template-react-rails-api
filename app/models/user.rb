class User < ApplicationRecord
  has_secure_password
  belongs_to :household
  has_many :chores, through: :household
  has_many :child_chores

  validates :first_name, presence: true
  validates :email, presence: true
  validates :username, presence: true
end
