class Foster < ApplicationRecord
  has_many :pet_foster
  has_many :pet, through: :pet_foster
  has_many :meetup
  belongs_to :admin

  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
end
