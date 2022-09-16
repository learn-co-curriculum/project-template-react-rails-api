class Appointment < ApplicationRecord
  belongs_to :provider
  belongs_to :user

  validates :time, :day, :location, :reason, presence: true
  validates :reason, length: {minimum: 20}
end
