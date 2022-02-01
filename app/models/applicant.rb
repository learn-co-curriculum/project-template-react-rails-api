class Applicant < ApplicationRecord
  has_many :pet_application
  has_many :meetup
  belongs_to :admin

  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
