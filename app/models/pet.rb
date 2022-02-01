class Pet < ApplicationRecord
  has_many :pet_foster, dependent: :destroy
  has_many :foster, through: :pet_foster
  belongs_to :admin

  validates :name, presence: true
end
