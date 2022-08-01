class UserType < ApplicationRecord
  has_many :users

  validates :user_type, presence: true
end
