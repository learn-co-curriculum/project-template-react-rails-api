class Volunteer < ApplicationRecord
  belongs_to :user
  has_many :signups
  has_many :activities, through: :signups
end
