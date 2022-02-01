class Applicant < ApplicationRecord
  has_many :pet_application, dependent: :destroy
  has_many :meetup, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
