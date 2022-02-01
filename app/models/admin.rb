class Admin < ApplicationRecord
  has_many :applicant
  has_many :foster
  has_many :pet
  has_many :meetup
  has_many :pet_application
  has_many :pet_foster

  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
