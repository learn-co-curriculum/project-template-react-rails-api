class Applicant < ApplicationRecord
  has_many :pet_application, dependent: :destroy
  has_many :meetup, dependent: :destroy

  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :email, presence: true, uniqueness: true
  validates :dob, presence: true
  validates :phone, presence: true
  validates :rent_own, presence: true
  validates :home_type, presence: true
  validates :length_address, presence: true
  validates :yard_description, presence: true
  validates :children, presence: true
  validates :pet_allergy, presence: true
  validates :lifestyle, presence: true
  validates :user_id, presence: true
end
